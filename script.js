/* =========================================
   SUPABASE
========================================= */

const SUPABASE_URL =
    "https://igikusqecnenjwbjoocf.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_-jFClaoda0zrYZ1V7q3qcg_tKNVPfdO";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


/* =========================================
   WHATSAPP
========================================= */

const RECEIVING_WHATSAPP =
    "2349040071415";


/* =========================================
   COUNTRY CODES
========================================= */

const countries = [

    ["🇦🇫", "Afghanistan", "+93"],
    ["🇦🇱", "Albania", "+355"],
    ["🇩🇿", "Algeria", "+213"],
    ["🇦🇩", "Andorra", "+376"],
    ["🇦🇴", "Angola", "+244"],
    ["🇦🇬", "Antigua and Barbuda", "+1"],
    ["🇦🇷", "Argentina", "+54"],
    ["🇦🇲", "Armenia", "+374"],
    ["🇦🇺", "Australia", "+61"],
    ["🇦🇹", "Austria", "+43"],
    ["🇦🇿", "Azerbaijan", "+994"],

    ["🇧🇸", "Bahamas", "+1"],
    ["🇧🇭", "Bahrain", "+973"],
    ["🇧🇩", "Bangladesh", "+880"],
    ["🇧🇧", "Barbados", "+1"],
    ["🇧🇾", "Belarus", "+375"],
    ["🇧🇪", "Belgium", "+32"],
    ["🇧🇿", "Belize", "+501"],
    ["🇧🇯", "Benin", "+229"],
    ["🇧🇹", "Bhutan", "+975"],
    ["🇧🇴", "Bolivia", "+591"],
    ["🇧🇦", "Bosnia and Herzegovina", "+387"],
    ["🇧🇼", "Botswana", "+267"],
    ["🇧🇷", "Brazil", "+55"],
    ["🇧🇳", "Brunei", "+673"],
    ["🇧🇬", "Bulgaria", "+359"],
    ["🇧🇫", "Burkina Faso", "+226"],
    ["🇧🇮", "Burundi", "+257"],

    ["🇨🇻", "Cabo Verde", "+238"],
    ["🇰🇭", "Cambodia", "+855"],
    ["🇨🇲", "Cameroon", "+237"],
    ["🇨🇦", "Canada", "+1"],
    ["🇨🇫", "Central African Republic", "+236"],
    ["🇹🇩", "Chad", "+235"],
    ["🇨🇱", "Chile", "+56"],
    ["🇨🇳", "China", "+86"],
    ["🇨🇴", "Colombia", "+57"],
    ["🇰🇲", "Comoros", "+269"],
    ["🇨🇬", "Congo", "+242"],
    ["🇨🇩", "DR Congo", "+243"],
    ["🇨🇷", "Costa Rica", "+506"],
    ["🇨🇮", "Côte d'Ivoire", "+225"],
    ["🇭🇷", "Croatia", "+385"],
    ["🇨🇺", "Cuba", "+53"],
    ["🇨🇾", "Cyprus", "+357"],
    ["🇨🇿", "Czechia", "+420"],

    ["🇩🇰", "Denmark", "+45"],
    ["🇩🇯", "Djibouti", "+253"],
    ["🇩🇲", "Dominica", "+1"],
    ["🇩🇴", "Dominican Republic", "+1"],

    ["🇪🇨", "Ecuador", "+593"],
    ["🇪🇬", "Egypt", "+20"],
    ["🇸🇻", "El Salvador", "+503"],
    ["🇬🇶", "Equatorial Guinea", "+240"],
    ["🇪🇷", "Eritrea", "+291"],
    ["🇪🇪", "Estonia", "+372"],
    ["🇸🇿", "Eswatini", "+268"],
    ["🇪🇹", "Ethiopia", "+251"],

    ["🇫🇯", "Fiji", "+679"],
    ["🇫🇮", "Finland", "+358"],
    ["🇫🇷", "France", "+33"],

    ["🇬🇦", "Gabon", "+241"],
    ["🇬🇲", "Gambia", "+220"],
    ["🇬🇪", "Georgia", "+995"],
    ["🇩🇪", "Germany", "+49"],
    ["🇬🇭", "Ghana", "+233"],
    ["🇬🇷", "Greece", "+30"],
    ["🇬🇩", "Grenada", "+1"],
    ["🇬🇹", "Guatemala", "+502"],
    ["🇬🇳", "Guinea", "+224"],
    ["🇬🇼", "Guinea-Bissau", "+245"],
    ["🇬🇾", "Guyana", "+592"],

    ["🇭🇹", "Haiti", "+509"],
    ["🇭🇳", "Honduras", "+504"],
    ["🇭🇺", "Hungary", "+36"],

    ["🇮🇸", "Iceland", "+354"],
    ["🇮🇳", "India", "+91"],
    ["🇮🇩", "Indonesia", "+62"],
    ["🇮🇷", "Iran", "+98"],
    ["🇮🇶", "Iraq", "+964"],
    ["🇮🇪", "Ireland", "+353"],
    ["🇮🇱", "Israel", "+972"],
    ["🇮🇹", "Italy", "+39"],

    ["🇯🇲", "Jamaica", "+1"],
    ["🇯🇵", "Japan", "+81"],
    ["🇯🇴", "Jordan", "+962"],

    ["🇰🇿", "Kazakhstan", "+7"],
    ["🇰🇪", "Kenya", "+254"],
    ["🇰🇮", "Kiribati", "+686"],
    ["🇰🇼", "Kuwait", "+965"],
    ["🇰🇬", "Kyrgyzstan", "+996"],

    ["🇱🇦", "Laos", "+856"],
    ["🇱🇻", "Latvia", "+371"],
    ["🇱🇧", "Lebanon", "+961"],
    ["🇱🇸", "Lesotho", "+266"],
    ["🇱🇷", "Liberia", "+231"],
    ["🇱🇾", "Libya", "+218"],
    ["🇱🇮", "Liechtenstein", "+423"],
    ["🇱🇹", "Lithuania", "+370"],
    ["🇱🇺", "Luxembourg", "+352"],

    ["🇲🇬", "Madagascar", "+261"],
    ["🇲🇼", "Malawi", "+265"],
    ["🇲🇾", "Malaysia", "+60"],
    ["🇲🇻", "Maldives", "+960"],
    ["🇲🇱", "Mali", "+223"],
    ["🇲🇹", "Malta", "+356"],
    ["🇲🇭", "Marshall Islands", "+692"],
    ["🇲🇷", "Mauritania", "+222"],
    ["🇲🇺", "Mauritius", "+230"],
    ["🇲🇽", "Mexico", "+52"],
    ["🇫🇲", "Micronesia", "+691"],
    ["🇲🇩", "Moldova", "+373"],
    ["🇲🇨", "Monaco", "+377"],
    ["🇲🇳", "Mongolia", "+976"],
    ["🇲🇪", "Montenegro", "+382"],
    ["🇲🇦", "Morocco", "+212"],
    ["🇲🇿", "Mozambique", "+258"],
    ["🇲🇲", "Myanmar", "+95"],

    ["🇳🇦", "Namibia", "+264"],
    ["🇳🇷", "Nauru", "+674"],
    ["🇳🇵", "Nepal", "+977"],
    ["🇳🇱", "Netherlands", "+31"],
    ["🇳🇿", "New Zealand", "+64"],
    ["🇳🇮", "Nicaragua", "+505"],
    ["🇳🇪", "Niger", "+227"],
    ["🇳🇬", "Nigeria", "+234"],
    ["🇰🇵", "North Korea", "+850"],
    ["🇲🇰", "North Macedonia", "+389"],
    ["🇳🇴", "Norway", "+47"],

    ["🇴🇲", "Oman", "+968"],

    ["🇵🇰", "Pakistan", "+92"],
    ["🇵🇼", "Palau", "+680"],
    ["🇵🇦", "Panama", "+507"],
    ["🇵🇬", "Papua New Guinea", "+675"],
    ["🇵🇾", "Paraguay", "+595"],
    ["🇵🇪", "Peru", "+51"],
    ["🇵🇭", "Philippines", "+63"],
    ["🇵🇱", "Poland", "+48"],
    ["🇵🇹", "Portugal", "+351"],

    ["🇶🇦", "Qatar", "+974"],

    ["🇷🇴", "Romania", "+40"],
    ["🇷🇺", "Russia", "+7"],
    ["🇷🇼", "Rwanda", "+250"],

    ["🇰🇳", "Saint Kitts and Nevis", "+1"],
    ["🇱🇨", "Saint Lucia", "+1"],
    ["🇻🇨", "Saint Vincent and the Grenadines", "+1"],
    ["🇼🇸", "Samoa", "+685"],
    ["🇸🇲", "San Marino", "+378"],
    ["🇸🇹", "São Tomé and Príncipe", "+239"],
    ["🇸🇦", "Saudi Arabia", "+966"],
    ["🇸🇳", "Senegal", "+221"],
    ["🇷🇸", "Serbia", "+381"],
    ["🇸🇨", "Seychelles", "+248"],
    ["🇸🇱", "Sierra Leone", "+232"],
    ["🇸🇬", "Singapore", "+65"],
    ["🇸🇰", "Slovakia", "+421"],
    ["🇸🇮", "Slovenia", "+386"],
    ["🇸🇧", "Solomon Islands", "+677"],
    ["🇸🇴", "Somalia", "+252"],
    ["🇿🇦", "South Africa", "+27"],
    ["🇰🇷", "South Korea", "+82"],
    ["🇸🇸", "South Sudan", "+211"],
    ["🇪🇸", "Spain", "+34"],
    ["🇱🇰", "Sri Lanka", "+94"],
    ["🇸🇩", "Sudan", "+249"],
    ["🇸🇷", "Suriname", "+597"],
    ["🇸🇪", "Sweden", "+46"],
    ["🇨🇭", "Switzerland", "+41"],
    ["🇸🇾", "Syria", "+963"],

    ["🇹🇼", "Taiwan", "+886"],
    ["🇹🇯", "Tajikistan", "+992"],
    ["🇹🇿", "Tanzania", "+255"],
    ["🇹🇭", "Thailand", "+66"],
    ["🇹🇱", "Timor-Leste", "+670"],
    ["🇹🇬", "Togo", "+228"],
    ["🇹🇴", "Tonga", "+676"],
    ["🇹🇹", "Trinidad and Tobago", "+1"],
    ["🇹🇳", "Tunisia", "+216"],
    ["🇹🇷", "Turkey", "+90"],
    ["🇹🇲", "Turkmenistan", "+993"],
    ["🇹🇻", "Tuvalu", "+688"],

    ["🇺🇬", "Uganda", "+256"],
    ["🇺🇦", "Ukraine", "+380"],
    ["🇦🇪", "United Arab Emirates", "+971"],
    ["🇬🇧", "United Kingdom", "+44"],
    ["🇺🇸", "United States", "+1"],
    ["🇺🇾", "Uruguay", "+598"],
    ["🇺🇿", "Uzbekistan", "+998"],

    ["🇻🇺", "Vanuatu", "+678"],
    ["🇻🇦", "Vatican City", "+39"],
    ["🇻🇪", "Venezuela", "+58"],
    ["🇻🇳", "Vietnam", "+84"],

    ["🇾🇪", "Yemen", "+967"],

    ["🇿🇲", "Zambia", "+260"],
    ["🇿🇼", "Zimbabwe", "+263"]

];


/* =========================================
   COUNTRY SELECTORS
========================================= */

function populateCountryCodes() {

    const phoneCode =
        document.getElementById("phoneCode");

    const whatsappCode =
        document.getElementById("whatsappCode");

    if (!phoneCode || !whatsappCode) {
        return;
    }

    countries.forEach(
        ([flag, country, code]) => {

            const option1 =
                document.createElement("option");

            option1.value = code;

            option1.textContent =
                `${flag} ${country} ${code}`;

            phoneCode.appendChild(option1);


            const option2 =
                document.createElement("option");

            option2.value = code;

            option2.textContent =
                `${flag} ${country} ${code}`;

            whatsappCode.appendChild(option2);

        }
    );


    phoneCode.value = "+234";
    whatsappCode.value = "+234";
}


/* =========================================
   AUTH MODAL
========================================= */

const authModal =
    document.getElementById("authModal");

const accountButton =
    document.getElementById("accountButton");

const closeAuth =
    document.getElementById("closeAuth");

const modalOverlay =
    document.getElementById("modalOverlay");


function openAuth() {

    authModal.classList.add("active");

    showLogin();

}


function closeAuthModal() {

    authModal.classList.remove("active");

}


if (accountButton) {

    accountButton.addEventListener(
        "click",
        async function () {

            const {
                data: { user }
            } = await supabaseClient.auth.getUser();

            if (user) {

                authModal.classList.add("active");

                showAccount(user);

            } else {

                openAuth();

            }

        }
    );

}


if (closeAuth) {

    closeAuth.addEventListener(
        "click",
        closeAuthModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeAuthModal
    );

}


/* =========================================
   AUTH VIEWS
========================================= */

function showSignup() {

    document.getElementById("signupView")
        .style.display = "block";

    document.getElementById("loginView")
        .style.display = "none";

    document.getElementById("accountView")
        .style.display = "none";

}


function showLogin() {

    document.getElementById("signupView")
        .style.display = "none";

    document.getElementById("loginView")
        .style.display = "block";

    document.getElementById("accountView")
        .style.display = "none";

}


function showAccount(user) {

    document.getElementById("signupView")
        .style.display = "none";

    document.getElementById("loginView")
        .style.display = "none";

    document.getElementById("accountView")
        .style.display = "block";


    const email =
        document.getElementById("accountEmail");

    if (email) {

        email.textContent =
            user.email || "";

    }

}


/* =========================================
   AUTH NAVIGATION
========================================= */

document.getElementById("goLogin")
    ?.addEventListener(
        "click",
        showLogin
    );


document.getElementById("goSignup")
    ?.addEventListener(
        "click",
        showSignup
    );


/* =========================================
   3-WORD PASSWORD CHECK
========================================= */

function isThreeWordPhrase(value) {

    return value
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .length === 3;

}


/* =========================================
   SIGN UP
========================================= */

const signupForm =
    document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();


            const email =
                document
                    .getElementById("signupEmail")
                    .value
                    .trim();


            const phrase =
                document
                    .getElementById("signupPhrase")
                    .value
                    .trim();


            const message =
                document.getElementById(
                    "signupMessage"
                );


            if (!isThreeWordPhrase(phrase)) {

                message.textContent =
                    "Your password must contain exactly 3 words.";

                message.className =
                    "auth-message error";

                return;

            }


            message.textContent =
                "Creating your account...";

            message.className =
                "auth-message";


            const {
                data,
                error
            } =
                await supabaseClient.auth.signUp({

                    email: email,

                    password: phrase

                });


            if (error) {

                message.textContent =
                    error.message;

                message.className =
                    "auth-message error";

                return;

            }


            message.textContent =
                "Account created! Check your email and tap the confirmation link before logging in.";

            message.className =
                "auth-message success";


            signupForm.reset();

        }
    );

}


/* =========================================
   LOGIN
========================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();


            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim();


            const phrase =
                document
                    .getElementById("loginPhrase")
                    .value
                    .trim();


            const message =
                document.getElementById(
                    "loginMessage"
                );


            message.textContent =
                "Logging in...";

            message.className =
                "auth-message";


            const {
                data,
                error
            } =
                await supabaseClient.auth.signInWithPassword({

                    email: email,

                    password: phrase

                });


            if (error) {

                message.textContent =
                    error.message;

                message.className =
                    "auth-message error";

                return;

            }


            if (!data.user) {

                message.textContent =
                    "Login failed. Please try again.";

                message.className =
                    "auth-message error";

                return;

            }


            message.textContent =
                "";

            showAccount(data.user);

            updateAccountButton(data.user);

        }
    );

}


/* =========================================
   LOGOUT
========================================= */

const logoutButton =
    document.getElementById("logoutButton");


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        async function () {

            const { error } =
                await supabaseClient.auth.signOut();


            if (error) {

                alert(error.message);

                return;

            }


            closeAuthModal();

            updateAccountButton(null);

        }
    );

}


/* =========================================
   UPDATE ACCOUNT BUTTON
========================================= */

async function updateAccountButton(user = null) {

    if (!user) {

        const {
            data
        } =
            await supabaseClient.auth.getUser();

        user = data.user;

    }


    if (!accountButton) {
        return;
    }


    if (user) {

        accountButton.textContent =
            "My Account";

    } else {

        accountButton.textContent =
            "Sign Up / Login";

    }

}


/* =========================================
   AUTH SESSION CHANGES
========================================= */

supabaseClient.auth.onAuthStateChange(
    function (event, session) {

        updateAccountButton(
            session?.user || null
        );

    }
);


/* =========================================
   REQUEST → WHATSAPP
========================================= */

const requestForm =
    document.getElementById("requestForm");


if (requestForm) {

    requestForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


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


            const fullName =
                document
                    .getElementById("fullName")
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


            const phoneCode =
                document
                    .getElementById("phoneCode")
                    .value;


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            const whatsappCode =
                document
                    .getElementById("whatsappCode")
                    .value;


            const whatsappNumber =
                document
                    .getElementById("whatsappNumber")
                    .value
                    .trim();


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

                alert(
                    "Please fill in all required fields."
                );

                return;

            }


            const cleanPhone =
                phone.replace(/\D/g, "");


            const cleanWhatsApp =
                whatsappNumber.replace(/\D/g, "");


            const fullPhone =
                phoneCode + cleanPhone;


            const fullWhatsApp =
                whatsappCode + cleanWhatsApp;


            const message =
`NEW PRODUCT REQUEST

━━━━━━━━━━━━━━━━━━━━

PRODUCT INFORMATION

Product Name:
${productName}

Estimated Budget:
$${budget} USD

Description:
${description}

━━━━━━━━━━━━━━━━━━━━

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

━━━━━━━━━━━━━━━━━━━━

Sent from RequestHub`;


            const whatsappURL =
                "https://wa.me/" +
                RECEIVING_WHATSAPP +
                "?text=" +
                encodeURIComponent(message);


            window.location.href =
                whatsappURL;

        }
    );

}


/* =========================================
   START
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        populateCountryCodes();

        updateAccountButton();

    }
);