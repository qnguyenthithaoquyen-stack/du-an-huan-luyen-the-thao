import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    updateDoc, 
    getDoc, 
    collection, 
    query, 
    where, 
    getDocs, 
    onSnapshot, 
    arrayUnion,
    addDoc,
    Timestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCillNx0AKVbedhhRmGAtUeAUblck1FNqI",
  authDomain: "ho-tro-huan-luyen.firebaseapp.com",
  projectId: "ho-tro-huan-luyen",
  storageBucket: "ho-tro-huan-luyen.appspot.com",
  messagingSenderId: "569088489001",
  appId: "1:569088489001:web:b68bbe82cdc8398f44ce38"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- CHẠY LOGIC KHI TRANG ĐÃ TẢI XONG ---
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIC CHUNG CHO TẤT CẢ CÁC TRANG ---
    const btnLogoutNav = document.getElementById('btnLogoutNav');
    if (btnLogoutNav) {
        btnLogoutNav.addEventListener('click', async () => {
            try {
                await signOut(auth);
                window.location.href = 'index.html';
            } catch (error) {
                console.error("Lỗi đăng xuất:", error);
            }
        });
    }

    onAuthStateChanged(auth, async (user) => {
        const btnLoginNav = document.getElementById('btnLoginNav');
        const btnLogoutNav = document.getElementById('btnLogoutNav');
        const navDashboardLink = document.getElementById('nav-dashboard-link');

        if (user) {
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                if (btnLoginNav) btnLoginNav.style.display = 'none';
                if (btnLogoutNav) btnLogoutNav.style.display = 'block';
                if (navDashboardLink) navDashboardLink.style.display = 'block';

                if (userData.role === 'coach') {
                    if(navDashboardLink) navDashboardLink.querySelector('a').href = 'hlv_dashboard.html';
                    if (window.location.pathname.includes('dangnhap.html') || window.location.pathname.includes('dangky.html') || window.location.pathname.endsWith('/')) {
                        window.location.href = 'hlv_dashboard.html';
                    }
                } else {
                    if(navDashboardLink) navDashboardLink.querySelector('a').href = 'vdv_dashboard.html';
                     if (window.location.pathname.includes('dangnhap.html') || window.location.pathname.includes('dangky.html') || window.location.pathname.endsWith('/')) {
                        window.location.href = 'vdv_dashboard.html';
                    }
                }
            }
        } else {
            if (btnLoginNav) btnLoginNav.style.display = 'block';
            if (btnLogoutNav) btnLogoutNav.style.display = 'none';
            if (navDashboardLink) navDashboardLink.style.display = 'none';
            const protectedPages = ['dashboard', 'chat', 'analysis', 'history', 'warnings', 'chooseCoach'];
            if (protectedPages.some(page => window.location.pathname.includes(page))) {
                window.location.href = 'index.html';
            }
        }
    });

    // --- LOGIC CHO TRANG ĐĂNG NHẬP (dangnhap.html) ---
    if (document.getElementById('btnLogin')) {
        const btnLogin = document.getElementById('btnLogin');
        const loginError = document.getElementById('login_error');
        
        btnLogin.addEventListener('click', async () => {
            loginError.textContent = '';
            const email = document.getElementById('login_email').value;
            const password = document.getElementById('login_password').value;
            if (!email || !password) {
                loginError.textContent = 'Vui lòng nhập email và mật khẩu.';
                return;
            }
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (error) {
                handleAuthError(error, loginError);
            }
        });
    }

    // --- LOGIC CHO TRANG ĐĂNG KÝ (dangky.html) ---
    if (document.getElementById('btnRegister')) {
        const btnRegister = document.getElementById('btnRegister');
        const registerError = document.getElementById('register_error');

        btnRegister.addEventListener('click', async () => {
            registerError.textContent = '';
            const fullName = document.getElementById('reg_fullname').value;
            const username = document.getElementById('reg_username').value;
            const email = document.getElementById('reg_email').value;
            const password = document.getElementById('reg_password').value;
            const age = document.getElementById('reg_age').value;
            const city = document.getElementById('reg_city').value;
            const role = document.getElementById('reg_role').value;

            if (!email || !password || !fullName) {
                registerError.textContent = 'Vui lòng điền đầy đủ thông tin.';
                return;
            }

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                await setDoc(doc(db, "users", user.uid), {
                    fullName, username, email, age, city, role, uid: user.uid, assignedCoachId: null
                });
                alert('Đăng ký thành công!');
                window.location.href = 'dangnhap.html';
            } catch (error) {
                handleAuthError(error, registerError);
            }
        });
    }
    
    // --- LOGIC CHO TRANG HLV (hlv_dashboard.html) ---
    if (document.getElementById('coachDashboard')) {
        const btnAddAthlete = document.getElementById('btnAddAthlete');
        const addAthleteModal = document.getElementById('addAthleteModal');
        const closeAddAthleteModal = document.getElementById('closeAddAthleteModal');
        const btnSaveAthlete = document.getElementById('btnSaveAthlete');
        const addAthleteError = document.getElementById('add_athlete_error');
        const athleteListUl = document.getElementById('athlete-list');
        let currentAthleteId = null;

        btnAddAthlete.addEventListener('click', () => addAthleteModal.style.display = 'flex');
        closeAddAthleteModal.addEventListener('click', () => addAthleteModal.style.display = 'none');

        btnSaveAthlete.addEventListener('click', async () => {
            // Logic to save athlete
        });

        async function loadMyAthletes(coachId) {
            // Logic to load athletes
        }

        athleteListUl.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            if (!li) return;
            currentAthleteId = li.dataset.athleteId;
            // Highlight logic
        });
        
        document.getElementById('btnCoachSendMessage').addEventListener('click', () => {
            if(currentAthleteId) {
                window.location.href = `chat.html?withId=${currentAthleteId}`;
            } else {
                alert("Vui lòng chọn một vận động viên.");
            }
        });
    }

    // --- LOGIC CHO TRANG VĐV (vdv_dashboard.html) ---
    if (document.getElementById('athleteDashboard')) {
        // ... Logic for athlete dashboard
    }

    function handleAuthError(error, errorElement) {
        console.error(error.code, error.message);
        let message = "Đã có lỗi xảy ra. Vui lòng thử lại.";
        switch (error.code) {
            case 'auth/invalid-email': message = "Địa chỉ email không hợp lệ."; break;
            case 'auth/weak-password': message = "Mật khẩu phải có ít nhất 6 ký tự."; break;
            case 'auth/email-already-in-use': message = "Email này đã được sử dụng."; break;
            case 'auth/invalid-credential': message = "Email hoặc mật khẩu không chính xác."; break;
            case 'auth/operation-not-allowed': message = "Lỗi cài đặt: Phương thức đăng nhập chưa được bật trên Firebase."; break;
        }
        errorElement.textContent = message;
    }
});
