/* =========================================================
   REQUESTHUB
   FULL SCRIPT
   INTERNATIONAL DELIVERY
========================================================= */


/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://igikusqecnenjwbjooc4.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_-jFClaoda0zrYZ1V7q3qcg_tKNVPfdO";


let supabaseClient = null;

if (window.supabase) {
    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
}


/* =========================================================
   SETTINGS
========================================================= */

const RECEIVING_WHATSAPP = "2349040071415";

const DELIVERY_FEE = "$1,000 USD";


/* =========================================================
   COUNTRY CALLING CODES
========================================================= */

const countries = [

    ["Afghanistan", "+93", "🇦🇫"],
    ["Albania", "+355", "🇦🇱"],
    ["Algeria", "+213", "🇩🇿"],
    ["Andorra", "+376", "🇦🇩"],
    ["Angola", "+244", "🇦🇴"],
    ["Antigua and Barbuda", "+1", "🇦🇬"],
    ["Argentina", "+54", "🇦🇷"],
    ["Armenia", "+374", "🇦🇲"],
    ["Australia", "+61", "🇦🇺"],
    ["Austria", "+43", "🇦🇹"],
    ["Azerbaijan", "+994", "🇦🇿"],

    ["Bahamas", "+1", "🇧🇸"],
    ["Bahrain", "+973", "🇧🇭"],
    ["Bangladesh", "+880", "🇧🇩"],
    ["Barbados", "+1", "🇧🇧"],
    ["Belarus", "+375", "🇧🇾"],
    ["Belgium", "+32", "🇧🇪"],
    ["Belize", "+501", "🇧🇿"],
    ["Benin", "+229", "🇧🇯"],
    ["Bhutan", "+975", "🇧🇹"],
    ["Bolivia", "+591", "🇧🇴"],
    ["Bosnia and Herzegovina", "+387", "🇧🇦"],
    ["Botswana", "+267", "🇧🇼"],
    ["Brazil", "+55", "🇧🇷"],
    ["Brunei", "+673", "🇧🇳"],
    ["Bulgaria", "+359", "🇧🇬"],
    ["Burkina Faso", "+226", "🇧🇫"],
    ["Burundi", "+257", "🇧🇮"],

    ["Cabo Verde", "+238", "🇨🇻"],
    ["Cambodia", "+855", "🇰🇭"],
    ["Cameroon", "+237", "🇨🇲"],
    ["Canada", "+1", "🇨🇦"],
    ["Central African Republic", "+236", "🇨🇫"],
    ["Chad", "+235", "🇹🇩"],
    ["Chile", "+56", "🇨🇱"],
    ["China", "+86", "🇨🇳"],
    ["Colombia", "+57", "🇨🇴"],
    ["Comoros", "+269", "🇰🇲"],
    ["Congo", "+242", "🇨🇬"],
    ["Costa Rica", "+506", "🇨🇷"],
    ["Croatia", "+385", "🇭🇷"],
    ["Cuba", "+53", "🇨🇺"],
    ["Cyprus", "+357", "🇨🇾"],
    ["Czech Republic", "+420", "🇨🇿"],

    ["Democratic Republic of the Congo", "+243", "🇨🇩"],
    ["Denmark", "+45", "🇩🇰"],
    ["Djibouti", "+253", "🇩🇯"],
    ["Dominica", "+1", "🇩🇲"],
    ["Dominican Republic", "+1", "🇩🇴"],

    ["Ecuador", "+593", "🇪🇨"],
    ["Egypt", "+20", "🇪🇬"],
    ["El Salvador", "+503", "🇸🇻"],
    ["Equatorial Guinea", "+240", "🇬🇶"],
    ["Eritrea", "+291", "🇪🇷"],
    ["Estonia", "+372", "🇪🇪"],
    ["Eswatini", "+268", "🇸🇿"],
    ["Ethiopia", "+251", "🇪🇹"],

    ["Fiji", "+679", "🇫🇯"],
    ["Finland", "+358", "🇫🇮"],
    ["France", "+33", "🇫🇷"],

    ["Gabon", "+241", "🇬🇦"],
    ["Gambia", "+220", "🇬🇲"],
    ["Georgia", "+995", "🇬🇪"],
    ["Germany", "+49", "🇩🇪"],
    ["Ghana", "+233", "🇬🇭"],
    ["Greece", "+30", "🇬🇷"],
    ["Grenada", "+1", "🇬🇩"],
    ["Guatemala", "+502", "🇬🇹"],
    ["Guinea", "+224", "🇬🇳"],
    ["Guinea-Bissau", "+245", "🇬🇼"],
    ["Guyana", "+592", "🇬🇾"],

    ["Haiti", "+509", "🇭🇹"],
    ["Honduras", "+504", "🇭🇳"],
    ["Hungary", "+36", "🇭🇺"],

    ["Iceland", "+354", "🇮🇸"],
    ["India", "+91", "🇮🇳"],
    ["Indonesia", "+62", "🇮🇩"],
    ["Iran", "+98", "🇮🇷"],
    ["Iraq", "+964", "🇮🇶"],
    ["Ireland", "+353", "🇮🇪"],
    ["Israel", "+972", "🇮🇱"],
    ["Italy", "+39", "🇮🇹"],
    ["Ivory Coast", "+225", "🇨🇮"],

    ["Jamaica", "+1", "🇯🇲"],
    ["Japan", "+81", "🇯🇵"],
    ["Jordan", "+962", "🇯🇴"],

    ["Kazakhstan", "+7", "🇰🇿"],
    ["Kenya", "+254", "🇰🇪"],
    ["Kiribati", "+686", "🇰🇮"],
    ["Kuwait", "+965", "🇰🇼"],
    ["Kyrgyzstan", "+996", "🇰🇬"],

    ["Laos", "+856", "🇱🇦"],
    ["Latvia", "+371", "🇱🇻"],
    ["Lebanon", "+961", "🇱🇧"],
    ["Lesotho", "+266", "🇱🇸"],
    ["Liberia", "+231", "🇱🇷"],
    ["Libya", "+218", "🇱🇾"],
    ["Liechtenstein", "+423", "🇱🇮"],
    ["Lithuania", "+370", "🇱🇹"],
    ["Luxembourg", "+352", "🇱🇺"],

    ["Madagascar", "+261", "🇲🇬"],
    ["Malawi", "+265", "🇲🇼"],
    ["Malaysia", "+60", "🇲🇾"],
    ["Maldives", "+960", "🇲🇻"],
    ["Mali", "+223", "🇲🇱"],
    ["Malta", "+356", "🇲🇹"],
    ["Marshall Islands", "+692", "🇲🇭"],
    ["Mauritania", "+222", "🇲🇷"],
    ["Mauritius", "+230", "🇲🇺"],
    ["Mexico", "+52", "🇲🇽"],
    ["Micronesia", "+691", "🇫🇲"],
    ["Moldova", "+373", "🇲🇩"],
    ["Monaco", "+377", "🇲🇨"],
    ["Mongolia", "+976", "🇲🇳"],
    ["Montenegro", "+382", "🇲🇪"],
    ["Morocco", "+212", "🇲🇦"],
    ["Mozambique", "+258", "🇲🇿"],
    ["Myanmar", "+95", "🇲🇲"],

    ["Namibia", "+264", "🇳🇦"],
    ["Nauru", "+674", "🇳🇷"],
    ["Nepal", "+977", "🇳🇵"],
    ["Netherlands", "+31", "🇳🇱"],
    ["New Zealand", "+64", "🇳🇿"],
    ["Nicaragua", "+505", "🇳🇮"],
    ["Niger", "+227", "🇳🇪"],
    ["Nigeria", "+234", "🇳🇬"],
    ["North Korea", "+850", "🇰🇵"],
    ["North Macedonia", "+389", "🇲🇰"],
    ["Norway", "+47", "🇳🇴"],

    ["Oman", "+968", "🇴🇲"],

    ["Pakistan", "+92", "🇵🇰"],
    ["Palau", "+680", "🇵🇼"],
    ["Palestine", "+970", "🇵🇸"],
    ["Panama", "+507", "🇵🇦"],
    ["Papua New Guinea", "+675", "🇵🇬"],
    ["Paraguay", "+595", "🇵🇾"],
    ["Peru", "+51", "🇵🇪"],
    ["Philippines", "+63", "🇵🇭"],
    ["Poland", "+48", "🇵🇱"],
    ["Portugal", "+351", "🇵🇹"],

    ["Qatar", "+974", "🇶🇦"],

    ["Romania", "+40", "🇷🇴"],
    ["Russia", "+7", "🇷🇺"],
    ["Rwanda", "+250", "🇷🇼"],

    ["Saint Kitts and Nevis", "+1", "🇰🇳"],
    ["Saint Lucia", "+1", "🇱🇨"],
    ["Saint Vincent and the Grenadines", "+1", "🇻🇨"],
    ["Samoa", "+685", "🇼🇸"],
    ["San Marino", "+378", "🇸🇲"],
    ["Sao Tome and Principe", "+239", "🇸🇹"],
    ["Saudi Arabia", "+966", "🇸🇦"],
    ["Senegal", "+221", "🇸🇳"],
    ["Serbia", "+381", "🇷🇸"],
    ["Seychelles", "+248", "🇸🇨"],
    ["Sierra Leone", "+232", "🇸🇱"],
    ["Singapore", "+65", "🇸🇬"],
    ["Slovakia", "+421", "🇸🇰"],
    ["Slovenia", "+386", "🇸🇮"],
    ["Solomon Islands", "+677", "🇸🇧"],
    ["Somalia", "+252", "🇸🇴"],
    ["South Africa", "+27", "🇿🇦"],
    ["South Korea", "+82", "🇰🇷"],
    ["South Sudan", "+211", "🇸🇸"],
    ["Spain", "+34", "🇪🇸"],
    ["Sri Lanka", "+94", "🇱🇰"],
    ["Sudan", "+249", "🇸🇩"],
    ["Suriname", "+597", "🇸🇷"],
    ["Sweden", "+46", "🇸🇪"],
    ["Switzerland", "+41", "🇨🇭"],
    ["Syria", "+963", "🇸🇾"],

    ["Taiwan", "+886", "🇹🇼"],
    ["Tajikistan", "+992", "🇹🇯"],
    ["Tanzania", "+255", "🇹🇿"],
    ["Thailand", "+66", "🇹🇭"],
    ["Timor-Leste", "+670", "🇹🇱"],
    ["Togo", "+228", "🇹🇬"],
    ["Tonga", "+676", "🇹🇴"],
    ["Trinidad and Tobago", "+1", "🇹🇹"],
    ["Tunisia", "+216", "🇹🇳"],
    ["Turkey", "+90", "🇹🇷"],
    ["Turkmenistan", "+993", "🇹🇲"],
    ["Tuvalu", "+688", "🇹🇻"],

    ["Uganda", "+256", "🇺🇬"],
    ["Ukraine", "+380", "🇺🇦"],
    ["United Arab Emirates", "+971", "🇦🇪"],
    ["United Kingdom", "+44", "🇬🇧"],
    ["United States", "+1", "🇺🇸"],
    ["Uruguay", "+598", "🇺🇾"],
    ["Uzbekistan", "+998", "🇺🇿"],

    ["Vanuatu", "+678", "🇻🇺"],
    ["Vatican City", "+39", "🇻🇦"],
    ["Venezuela", "+58", "🇻🇪"],
    ["Vietnam", "+84", "🇻🇳"],

    ["Yemen", "+967", "🇾🇪"],

    ["Zambia", "+260", "🇿🇲"],
    ["Zimbabwe", "+263", "🇿🇼"]

];


/* =========================================================
   POPULATE COUNTRY DROPDOWNS
========================================================= */

function populateCountryCodes() {

    const dropdownIds = [
        "senderPhoneCode",
        "senderWhatsAppCode",
        "recipientPhoneCode",
        "recipientWhatsAppCode"
    ];

    dropdownIds.forEach(function (id) {

        const select = document.getElementById(id);

        if (!select) return;

        select.innerHTML = "";

        const defaultOption = document.createElement("option");

        defaultOption.value = "";

        defaultOption.textContent =
            "Country code";

        select.appendChild(defaultOption);


        countries.forEach(function (country) {

            const option =
                document.createElement("option");

            option.value = country[1];

            option.textContent =
                country[2] +
                " " +
                country[0] +
                " (" +
                country[1] +
                ")";

            select.appendChild(option);

        });


        /* Nigeria default */

        select.value = "+234";

    });

}


/* =========================================================
   PHONE NUMBER
========================================================= */

function cleanPhoneNumber(number) {

    return String(number || "")
        .replace(/\D/g, "");

}


function createFullPhoneNumber(codeId, phoneId) {

    const codeElement =
        document.getElementById(codeId);

    const phoneElement =
        document.getElementById(phoneId);

    if (!codeElement || !phoneElement) {
        return "";
    }

    const code =
        codeElement.value.replace("+", "");

    const number =
        cleanPhoneNumber(phoneElement.value);

    if (!code || !number) {
        return "";
    }

    return "+" + code + number;

}


/* =========================================================
   AUTH MODAL
========================================================= */

const authModal =
    document.getElementById("authModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const closeAuth =
    document.getElementById("closeAuth");

const accountButton =
    document.getElementById("accountButton");


function openAuth() {

    if (!authModal) return;

    authModal.classList.add("active");

}


function closeAuthModal() {

    if (!authModal) return;

    authModal.classList.remove("active");

}


if (accountButton) {

    accountButton.addEventListener(
        "click",
        async function () {

            if (!supabaseClient) {

                openAuth();

                return;
            }

            const result =
                await supabaseClient.auth.getSession();

            const session =
                result.data.session;

            if (session) {

                showAccount();

            } else {

                showSignup();

            }

            openAuth();

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


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeAuthModal();
        }

    }
);


/* =========================================================
   AUTH VIEWS
========================================================= */

function showSignup() {

    const signup =
        document.getElementById("signupView");

    const login =
        document.getElementById("loginView");

    const account =
        document.getElementById("accountView");


    if (signup) {
        signup.style.display = "block";
        signup.classList.add("active");
    }

    if (login) {
        login.style.display = "none";
        login.classList.remove("active");
    }

    if (account) {
        account.style.display = "none";
        account.classList.remove("active");
    }

}


function showLogin() {

    const signup =
        document.getElementById("signupView");

    const login =
        document.getElementById("loginView");

    const account =
        document.getElementById("accountView");


    if (signup) {
        signup.style.display = "none";
        signup.classList.remove("active");
    }

    if (login) {
        login.style.display = "block";
        login.classList.add("active");
    }

    if (account) {
        account.style.display = "none";
        account.classList.remove("active");
    }

}


function showAccount() {

    const signup =
        document.getElementById("signupView");

    const login =
        document.getElementById("loginView");

    const account =
        document.getElementById("accountView");


    if (signup) {
        signup.style.display = "none";
        signup.classList.remove("active");
    }

    if (login) {
        login.style.display = "none";
        login.classList.remove("active");
    }

    if (account) {
        account.style.display = "block";
        account.classList.add("active");
    }

}


/* =========================================================
   SWITCH AUTH
========================================================= */

const goLogin =
    document.getElementById("goLogin");

const goSignup =
    document.getElementById("goSignup");


if (goLogin) {

    goLogin.addEventListener(
        "click",
        showLogin
    );

}


if (goSignup) {

    goSignup.addEventListener(
        "click",
        showSignup
    );

}


/* =========================================================
   SIGN UP
========================================================= */

const signupForm =
    document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


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


            const wordCount =
                phrase
                    .split(/\s+/)
                    .filter(Boolean)
                    .length;


            if (wordCount !== 3) {

                if (message) {

                    message.textContent =
                        "Your password must contain exactly 3 words.";

                    message.className =
                        "message error-message";

                }

                return;
            }


            if (!supabaseClient) {

                if (message) {

                    message.textContent =
                        "Account service is unavailable.";

                    message.className =
                        "message error-message";

                }

                return;
            }


            if (message) {

                message.textContent =
                    "Creating your account...";

                message.className =
                    "message";

            }


            try {

                const result =
                    await supabaseClient.auth.signUp({
                        email: email,
                        password: phrase
                    });


                if (result.error) {
                    throw result.error;
                }


                if (message) {

                    if (result.data.session) {

                        message.textContent =
                            "Account created successfully.";

                        message.className =
                            "message success-message";

                        setTimeout(function () {

                            showAccount();

                            updateAccountButton();

                        }, 700);

                    } else {

                        message.textContent =
                            "Account created. Check your email to confirm your account, then log in.";

                        message.className =
                            "message success-message";

                    }

                }

            } catch (error) {

                if (message) {

                    message.textContent =
                        error.message ||
                        "Unable to create account.";

                    message.className =
                        "message error-message";

                }

            }

        }
    );

}


/* =========================================================
   LOGIN
========================================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


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


            if (!supabaseClient) {

                if (message) {

                    message.textContent =
                        "Account service is unavailable.";

                    message.className =
                        "message error-message";

                }

                return;
            }


            if (message) {

                message.textContent =
                    "Logging in...";

                message.className =
                    "message";

            }


            try {

                const result =
                    await supabaseClient.auth
                        .signInWithPassword({
                            email: email,
                            password: phrase
                        });


                if (result.error) {
                    throw result.error;
                }


                if (message) {

                    message.textContent =
                        "Login successful.";

                    message.className =
                        "message success-message";

                }


                updateAccountButton();


                setTimeout(function () {

                    showAccount();

                }, 400);


            } catch (error) {

                if (message) {

                    message.textContent =
                        error.message ||
                        "Login failed.";

                    message.className =
                        "message error-message";

                }

            }

        }
    );

}


/* =========================================================
   UPDATE ACCOUNT BUTTON
========================================================= */

async function updateAccountButton() {

    if (!accountButton) return;

    if (!supabaseClient) {

        accountButton.textContent =
            "Sign Up / Login";

        return;

    }


    try {

        const result =
            await supabaseClient.auth.getSession();

        const session =
            result.data.session;


        if (session) {

            accountButton.textContent =
                "My Account";

            const accountEmail =
                document.getElementById(
                    "accountEmail"
                );

            if (accountEmail) {

                accountEmail.textContent =
                    session.user.email || "Account";

            }

        } else {

            accountButton.textContent =
                "Sign Up / Login";

        }

    } catch (error) {

        accountButton.textContent =
            "Sign Up / Login";

    }

}

