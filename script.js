// ==========================================
// YOUR RECEIVING EMAIL
// ==========================================

const RECEIVING_EMAIL = "yourbusiness@gmail.com";


// ==========================================
// AUTH
// ==========================================

let users = JSON.parse(
    localStorage.getItem("requestHubUsers") || "[]"
);


// ==========================================
// OPEN AUTH
// ==========================================

function openAuth() {

    document
        .getElementById("authModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


// ==========================================
// CLOSE AUTH
// ==========================================

function closeAuth() {

    document
        .getElementById("authModal")
        .classList.remove("active");

    document.body.style.overflow = "auto";

    clearAuthMessage();
}


// ==========================================
// CLICK OUTSIDE MODAL
// ==========================================

document
    .getElementById("authModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeAuth();
        }

    });


// ==========================================
// SIGNUP TAB
// ==========================================

function showSignup() {

    document
        .getElementById("signupBox")
        .classList.remove("hidden");

    document
        .getElementById("loginBox")
        .classList.add("hidden");


    document
        .getElementById("signupTab")
        .classList.add("active-tab");

    document
        .getElementById("loginTab")
        .classList.remove("active-tab");


    clearAuthMessage();
}


// ==========================================
// LOGIN TAB
// ==========================================

function showLogin() {

    document
        .getElementById("signupBox")
        .classList.add("hidden");

    document
        .getElementById("loginBox")
        .classList.remove("hidden");


    document
        .getElementById("signupTab")
        .classList.remove("active-tab");

    document
        .getElementById("loginTab")
        .classList.add("active-tab");


    clearAuthMessage();
}


// ==========================================
// AUTH MESSAGE
// ==========================================

function showAuthMessage(message) {

    document
        .getElementById("authMessage")
        .textContent = message;
}


function clearAuthMessage() {

    document
        .getElementById("authMessage")
        .textContent = "";
}


// ==========================================
// CHECK 3-WORD PHRASE
// ==========================================

function isThreeWordPhrase(phrase) {

    const words = phrase
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0);

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


        // CHECK PHRASE

        if (!isThreeWordPhrase(phrase)) {

            showAuthMessage(
                "Your phrase must contain exactly 3 words."
            );

            return;
        }


        // CHECK EXISTING ACCOUNT

        const existingUser =
            users.find(user => user.email === email);


        if (existingUser) {

            showAuthMessage(
                "An account with this email already exists."
            );

            return;
        }


        // CREATE ACCOUNT

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
            "Account created successfully."
        );


        document
            .getElementById("signupForm")
            .reset();


        setTimeout(function() {

            closeAuth();

            updateAccountButton();

        }, 900);

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


        const user =
            users.find(
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
            "Login successful."
        );


        document
            .getElementById("loginForm")
            .reset();


        setTimeout(function() {

            closeAuth();

            updateAccountButton();

        }, 700);

    });


// ==========================================
// ACCOUNT BUTTON
// ==========================================

function updateAccountButton() {

    const loggedInEmail =
        localStorage.getItem("requestHubLoggedIn");


    const button =
        document.getElementById("navAccountButton");


    if (loggedInEmail) {

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

    localStorage.removeItem(
        "requestHubLoggedIn"
    );

    updateAccountButton();

}


// ==========================================
// REQUEST FORM
// ==========================================

document
    .getElementById("requestForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        // PRODUCT

        const productName =
            document
                .getElementById("productName")
                .value
                .trim();


        const budget =
            document
                .getElementById("budget")
                .value
                .trim();


        const description =
            document
                .getElementById("description")
                .value
                .trim();


        // CUSTOMER

        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const country =
            document
                .getElementById("country")
                .value
                .trim();


        const state =
            document
                .getElementById("state")
                .value
                .trim();


        const city =
            document
                .getElementById("city")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const requestEmail =
            document
                .getElementById("requestEmail")
                .value
                .trim();


        // ======================================
        // EMAIL SUBJECT
        // ======================================

        const subject =
            "New Product Request - " +
            productName;


        // ======================================
        // EMAIL BODY
        // ======================================

        let body = "";


        body += "NEW PRODUCT REQUEST\n";
        body += "==============================\n\n";


        body += "PRODUCT INFORMATION\n";
        body += "------------------------------\n";

        body +=
            "Product Name: " +
            productName +
            "\n";

        body +=
            "Estimated Budget: $" +
            budget +
            " USD\n";

        body +=
            "Description:\n" +
            description +
            "\n\n";


        body += "CUSTOMER INFORMATION\n";
        body += "------------------------------\n";

        body +=
            "Name: " +
            name +
            "\n";

        body +=
            "Country: " +
            country +
            "\n";

        body +=
            "State: " +
            state +
            "\n";

        body +=
            "City: " +
            city +
            "\n";

        body +=
            "Phone: " +
            phone +
            "\n";


        if (requestEmail !== "") {

            body +=
                "Email: " +
                requestEmail +
                "\n";

        } else {

            body +=
                "Email: Not provided\n";

        }


        body += "\n";
        body += "==============================\n";
        body += "Please contact the customer regarding this request.\n";


        // ======================================
        // CREATE MAILTO
        // ======================================

        const mailto =
            "mailto:" +
            RECEIVING_EMAIL +
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);


        // ======================================
        // OPEN EMAIL APP
        // ======================================

        window.location.href = mailto;

    });


// ==========================================
// INITIALIZE
// ==========================================

updateAccountButton();