// ==========================================
// REQUESTHUB SETTINGS
// ==========================================

const RECEIVING_WHATSAPP = "2349040071415";


// ==========================================
// SIMPLE ACCOUNT SYSTEM
// ==========================================

let users = JSON.parse(
    localStorage.getItem("requestHubUsers") || "[]"
);


// ==========================================
// AUTH MODAL
// ==========================================

function openAuth() {
    const modal = document.getElementById("authModal");

    modal.classList.add("show");

    if (isLoggedIn()) {
        showAccount();
    } else {
        showSignup();
    }
}


function closeAuth() {
    document
        .getElementById("authModal")
        .classList.remove("show");
}


// ==========================================
// AUTH TABS
// ==========================================

function showSignup() {

    document.getElementById("signupForm").style.display = "block";

    document.getElementById("loginForm").style.display = "none";

    document
        .getElementById("signupTab")
        .classList.add("active");

    document
        .getElementById("loginTab")
        .classList.remove("active");

    clearAuthMessage();
}


function showLogin() {

    document.getElementById("signupForm").style.display = "none";

    document.getElementById("loginForm").style.display = "block";

    document
        .getElementById("signupTab")
        .classList.remove("active");

    document
        .getElementById("loginTab")
        .classList.add("active");

    clearAuthMessage();
}


// ==========================================
// AUTH MESSAGE
// ==========================================

function showAuthMessage(message, success = false) {

    const box = document.getElementById("authMessage");

    box.textContent = message;

    box.className = success ? "success-message" : "error-message";
}


function clearAuthMessage() {

    const box = document.getElementById("authMessage");

    box.textContent = "";

    box.className = "";
}


// ==========================================
// CHECK 3-WORD PHRASE
// ==========================================

function isThreeWordPhrase(phrase) {

    const words = phrase
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    return words.length === 3;
}


// ==========================================
// SIGN UP
// ==========================================

document
    .getElementById("signupForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document
                .getElementById("signupEmail")
                .value
                .trim()
                .toLowerCase();

        const phrase =
            document
                .getElementById("signupPhrase")
                .value
                .trim();


        if (!isThreeWordPhrase(phrase)) {

            showAuthMessage(
                "Your phrase must contain exactly 3 words."
            );

            return;
        }


        const existingUser = users.find(
            user => user.email === email
        );


        if (existingUser) {

            showAuthMessage(
                "An account with this email already exists."
            );

            return;
        }


        users.push({
            email: email,
            phrase: phrase
        });


        localStorage.setItem(
            "requestHubUsers",
            JSON.stringify(users)
        );


        localStorage.setItem(
            "requestHubLoggedIn",
            email
        );


        showAuthMessage(
            "Account created successfully!",
            true
        );


        updateAccountButton();


        setTimeout(() => {

            closeAuth();

        }, 800);

    });


// ==========================================
// LOGIN
// ==========================================

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim()
                .toLowerCase();


        const phrase =
            document
                .getElementById("loginPhrase")
                .value
                .trim();


        const user = users.find(
            user =>
                user.email === email &&
                user.phrase === phrase
        );


        if (!user) {

            showAuthMessage(
                "Incorrect email or 3-word phrase."
            );

            return;
        }


        localStorage.setItem(
            "requestHubLoggedIn",
            email
        );


        showAuthMessage(
            "Login successful!",
            true
        );


        updateAccountButton();


        setTimeout(() => {

            closeAuth();

        }, 800);

    });


// ==========================================
// LOGIN CHECK
// ==========================================

function isLoggedIn() {

    return Boolean(
        localStorage.getItem("requestHubLoggedIn")
    );
}


// ==========================================
// ACCOUNT BUTTON
// ==========================================

function updateAccountButton() {

    const button =
        document.getElementById("accountBtn");


    if (isLoggedIn()) {

        button.textContent = "Logout";

        button.onclick = logout;

    } else {

        button.textContent = "Sign Up / Login";

        button.onclick = openAuth;
    }
}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    localStorage.removeItem("requestHubLoggedIn");

    updateAccountButton();

    alert("You have been logged out.");
}


// ==========================================
// ACCOUNT VIEW
// ==========================================

function showAccount() {

    const email =
        localStorage.getItem("requestHubLoggedIn");


    const modalContent =
        document.querySelector(".modal-content");


    modalContent.innerHTML = `

        <button class="close-modal" onclick="closeAuth()">×</button>

        <div class="account-view">

            <div class="account-icon">👤</div>

            <h2>Your Account</h2>

            <p>${email}</p>

            <button
                class="auth-btn"
                onclick="logout(); closeAuth();"
            >
                Logout
            </button>

        </div>
    `;
}


// ==========================================
// SEND REQUEST THROUGH WHATSAPP
// ==========================================

const requestForm = document.getElementById("requestForm");

if (requestForm) {
    requestForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const productName = document.getElementById("productName").value.trim();
        const budget = document.getElementById("budget").value.trim();
        const description = document.getElementById("description").value.trim();

        const fullName = document.getElementById("fullName").value.trim();
        const country = document.getElementById("country").value.trim();
        const state = document.getElementById("state").value.trim();
        const city = document.getElementById("city").value.trim();

        const phoneCode = document.getElementById("phoneCode").value;
        const phone = document.getElementById("phone").value.trim();

        const whatsappCode = document.getElementById("whatsappCode").value;
        const whatsappNumber = document.getElementById("whatsappNumber").value.trim();

        if (
            !productName ||
            !budget ||
            !description ||
            !fullName ||
            !country ||
            !state ||
            !city ||
            !phone ||
            !whatsappNumber
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        const fullPhone = phoneCode + phone;
        const fullWhatsApp = whatsappCode + whatsappNumber;

        const message =
`NEW PRODUCT REQUEST

PRODUCT INFORMATION

Product Name:
${productName}

Estimated Budget:
$${budget} USD

Description:
${description}

CUSTOMER INFORMATION

Full Name:
${fullName}

Country:
${country}

State:
${state}

City:
${city}

Phone Number:
${fullPhone}

WhatsApp Number:
${fullWhatsApp}

Sent from RequestHub`;

        const whatsappURL =
            "https://wa.me/2349040071415?text=" +
            encodeURIComponent(message);

        // Redirect directly to WhatsApp
        window.location.assign(whatsappURL);
    });
}

// ==========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ==========================================

document
    .getElementById("authModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeAuth();

        }

    });


// ==========================================
// INITIALIZE
// ==========================================

updateAccountButton();