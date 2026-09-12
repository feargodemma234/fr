// =====================================================
// SUPABASE
// =====================================================

const SUPABASE_URL =
    "https://igikusqecnenjwbjoocf.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_-jFClaoda0zrYZ1V7q3qcg_tKNVPfdO";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// =====================================================
// INTERNATIONAL COUNTRY CODES
// =====================================================

const accountCountryCodes = [
    ["Afghanistan","+93","🇦🇫"],
    ["Albania","+355","🇦🇱"],
    ["Algeria","+213","🇩🇿"],
    ["Andorra","+376","🇦🇩"],
    ["Angola","+244","🇦🇴"],
    ["Argentina","+54","🇦🇷"],
    ["Armenia","+374","🇦🇲"],
    ["Australia","+61","🇦🇺"],
    ["Austria","+43","🇦🇹"],
    ["Azerbaijan","+994","🇦🇿"],
    ["Bahamas","+1","🇧🇸"],
    ["Bahrain","+973","🇧🇭"],
    ["Bangladesh","+880","🇧🇩"],
    ["Barbados","+1","🇧🇧"],
    ["Belarus","+375","🇧🇾"],
    ["Belgium","+32","🇧🇪"],
    ["Belize","+501","🇧🇿"],
    ["Benin","+229","🇧🇯"],
    ["Bhutan","+975","🇧🇹"],
    ["Bolivia","+591","🇧🇴"],
    ["Bosnia and Herzegovina","+387","🇧🇦"],
    ["Botswana","+267","🇧🇼"],
    ["Brazil","+55","🇧🇷"],
    ["Brunei","+673","🇧🇳"],
    ["Bulgaria","+359","🇧🇬"],
    ["Burkina Faso","+226","🇧🇫"],
    ["Burundi","+257","🇧🇮"],
    ["Cambodia","+855","🇰🇭"],
    ["Cameroon","+237","🇨🇲"],
    ["Canada","+1","🇨🇦"],
    ["Cape Verde","+238","🇨🇻"],
    ["Central African Republic","+236","🇨🇫"],
    ["Chad","+235","🇹🇩"],
    ["Chile","+56","🇨🇱"],
    ["China","+86","🇨🇳"],
    ["Colombia","+57","🇨🇴"],
    ["Comoros","+269","🇰🇲"],
    ["Costa Rica","+506","🇨🇷"],
    ["Croatia","+385","🇭🇷"],
    ["Cuba","+53","🇨🇺"],
    ["Cyprus","+357","🇨🇾"],
    ["Czech Republic","+420","🇨🇿"],
    ["Denmark","+45","🇩🇰"],
    ["Djibouti","+253","🇩🇯"],
    ["Dominica","+1","🇩🇲"],
    ["Dominican Republic","+1","🇩🇴"],
    ["Ecuador","+593","🇪🇨"],
    ["Egypt","+20","🇪🇬"],
    ["El Salvador","+503","🇸🇻"],
    ["Equatorial Guinea","+240","🇬🇶"],
    ["Eritrea","+291","🇪🇷"],
    ["Estonia","+372","🇪🇪"],
    ["Eswatini","+268","🇸🇿"],
    ["Ethiopia","+251","🇪🇹"],
    ["Fiji","+679","🇫🇯"],
    ["Finland","+358","🇫🇮"],
    ["France","+33","🇫🇷"],
    ["Gabon","+241","🇬🇦"],
    ["Gambia","+220","🇬🇲"],
    ["Georgia","+995","🇬🇪"],
    ["Germany","+49","🇩🇪"],
    ["Ghana","+233","🇬🇭"],
    ["Greece","+30","🇬🇷"],
    ["Grenada","+1","🇬🇩"],
    ["Guatemala","+502","🇬🇹"],
    ["Guinea","+224","🇬🇳"],
    ["Guyana","+592","🇬🇾"],
    ["Haiti","+509","🇭🇹"],
    ["Honduras","+504","🇭🇳"],
    ["Hungary","+36","🇭🇺"],
    ["Iceland","+354","🇮🇸"],
    ["India","+91","🇮🇳"],
    ["Indonesia","+62","🇮🇩"],
    ["Iran","+98","🇮🇷"],
    ["Iraq","+964","🇮🇶"],
    ["Ireland","+353","🇮🇪"],
    ["Israel","+972","🇮🇱"],
    ["Italy","+39","🇮🇹"],
    ["Jamaica","+1","🇯🇲"],
    ["Japan","+81","🇯🇵"],
    ["Jordan","+962","🇯🇴"],
    ["Kazakhstan","+7","🇰🇿"],
    ["Kenya","+254","🇰🇪"],
    ["Kiribati","+686","🇰🇮"],
    ["Kuwait","+965","🇰🇼"],
    ["Kyrgyzstan","+996","🇰🇬"],
    ["Laos","+856","🇱🇦"],
    ["Latvia","+371","🇱🇻"],
    ["Lebanon","+961","🇱🇧"],
    ["Lesotho","+266","🇱🇸"],
    ["Liberia","+231","🇱🇷"],
    ["Libya","+218","🇱🇾"],
    ["Liechtenstein","+423","🇱🇮"],
    ["Lithuania","+370","🇱🇹"],
    ["Luxembourg","+352","🇱🇺"],
    ["Madagascar","+261","🇲🇬"],
    ["Malawi","+265","🇲🇼"],
    ["Malaysia","+60","🇲🇾"],
    ["Maldives","+960","🇲🇻"],
    ["Mali","+223","🇲🇱"],
    ["Malta","+356","🇲🇹"],
    ["Mauritania","+222","🇲🇷"],
    ["Mauritius","+230","🇲🇺"],
    ["Mexico","+52","🇲🇽"],
    ["Moldova","+373","🇲🇩"],
    ["Monaco","+377","🇲🇨"],
    ["Mongolia","+976","🇲🇳"],
    ["Montenegro","+382","🇲🇪"],
    ["Morocco","+212","🇲🇦"],
    ["Mozambique","+258","🇲🇿"],
    ["Myanmar","+95","🇲🇲"],
    ["Namibia","+264","🇳🇦"],
    ["Nauru","+674","🇳🇷"],
    ["Nepal","+977","🇳🇵"],
    ["Netherlands","+31","🇳🇱"],
    ["New Zealand","+64","🇳🇿"],
    ["Nicaragua","+505","🇳🇮"],
    ["Niger","+227","🇳🇪"],
    ["Nigeria","+234","🇳🇬"],
    ["North Korea","+850","🇰🇵"],
    ["North Macedonia","+389","🇲🇰"],
    ["Norway","+47","🇳🇴"],
    ["Oman","+968","🇴🇲"],
    ["Pakistan","+92","🇵🇰"],
    ["Palau","+680","🇵🇼"],
    ["Palestine","+970","🇵🇸"],
    ["Panama","+507","🇵🇦"],
    ["Papua New Guinea","+675","🇵🇬"],
    ["Paraguay","+595","🇵🇾"],
    ["Peru","+51","🇵🇪"],
    ["Philippines","+63","🇵🇭"],
    ["Poland","+48","🇵🇱"],
    ["Portugal","+351","🇵🇹"],
    ["Qatar","+974","🇶🇦"],
    ["Romania","+40","🇷🇴"],
    ["Russia","+7","🇷🇺"],
    ["Rwanda","+250","🇷🇼"],
    ["Saint Lucia","+1","🇱🇨"],
    ["Samoa","+685","🇼🇸"],
    ["San Marino","+378","🇸🇲"],
    ["Saudi Arabia","+966","🇸🇦"],
    ["Senegal","+221","🇸🇳"],
    ["Serbia","+381","🇷🇸"],
    ["Seychelles","+248","🇸🇨"],
    ["Sierra Leone","+232","🇸🇱"],
    ["Singapore","+65","🇸🇬"],
    ["Slovakia","+421","🇸🇰"],
    ["Slovenia","+386","🇸🇮"],
    ["Somalia","+252","🇸🇴"],
    ["South Africa","+27","🇿🇦"],
    ["South Korea","+82","🇰🇷"],
    ["South Sudan","+211","🇸🇸"],
    ["Spain","+34","🇪🇸"],
    ["Sri Lanka","+94","🇱🇰"],
    ["Sudan","+249","🇸🇩"],
    ["Suriname","+597","🇸🇷"],
    ["Sweden","+46","🇸🇪"],
    ["Switzerland","+41","🇨🇭"],
    ["Syria","+963","🇸🇾"],
    ["Taiwan","+886","🇹🇼"],
    ["Tajikistan","+992","🇹🇯"],
    ["Tanzania","+255","🇹🇿"],
    ["Thailand","+66","🇹🇭"],
    ["Togo","+228","🇹🇬"],
    ["Tonga","+676","🇹🇴"],
    ["Trinidad and Tobago","+1","🇹🇹"],
    ["Tunisia","+216","🇹🇳"],
    ["Turkey","+90","🇹🇷"],
    ["Turkmenistan","+993","🇹🇲"],
    ["Tuvalu","+688","🇹🇻"],
    ["Uganda","+256","🇺🇬"],
    ["Ukraine","+380","🇺🇦"],
    ["United Arab Emirates","+971","🇦🇪"],
    ["United Kingdom","+44","🇬🇧"],
    ["United States","+1","🇺🇸"],
    ["Uruguay","+598","🇺🇾"],
    ["Uzbekistan","+998","🇺🇿"],
    ["Vanuatu","+678","🇻🇺"],
    ["Vatican City","+39","🇻🇦"],
    ["Venezuela","+58","🇻🇪"],
    ["Vietnam","+84","🇻🇳"],
    ["Yemen","+967","🇾🇪"],
    ["Zambia","+260","🇿🇲"],
    ["Zimbabwe","+263","🇿🇼"]
];


// =====================================================
// LOAD ACCOUNT COUNTRY CODES
// =====================================================

function loadAccountCountryCodes() {

    const select = document.getElementById("signupPhoneCode");

    if (!select) return;

    select.innerHTML =
        '<option value="">Country code</option>';

    accountCountryCodes.forEach(function(country) {

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

    select.value = "+234";
}


// =====================================================
// AUTH MODAL
// =====================================================

const authModal =
    document.getElementById("authModal");

const accountButton =
    document.getElementById("accountButton");

const closeAuth =
    document.getElementById("closeAuth");

const modalOverlay =
    document.getElementById("modalOverlay");

const signupView =
    document.getElementById("signupView");

const loginView =
    document.getElementById("loginView");

const accountView =
    document.getElementById("accountView");


function openAuth() {

    authModal.classList.add("active");

    showCorrectView();
}


function closeAuthModal() {

    authModal.classList.remove("active");
}


function showCorrectView() {

    supabaseClient.auth.getSession()
        .then(function(result) {

            const session = result.data.session;

            if (session) {

                signupView.style.display = "none";
                loginView.style.display = "none";
                accountView.style.display = "block";

                showAccount(session.user);

            } else {

                signupView.style.display = "block";
                loginView.style.display = "none";
                accountView.style.display = "none";
            }
        });
}


accountButton?.addEventListener(
    "click",
    openAuth
);

closeAuth?.addEventListener(
    "click",
    closeAuthModal
);

modalOverlay?.addEventListener(
    "click",
    closeAuthModal
);


// =====================================================
// SWITCH LOGIN / SIGNUP
// =====================================================

document.getElementById("goLogin")
    ?.addEventListener("click", function() {

        signupView.style.display = "none";
        loginView.style.display = "block";
        accountView.style.display = "none";
    });


document.getElementById("goSignup")
    ?.addEventListener("click", function() {

        signupView.style.display = "block";
        loginView.style.display = "none";
        accountView.style.display = "none";
    });


// =====================================================
// SIGN UP
// =====================================================

document.getElementById("signupForm")
    ?.addEventListener("submit", async function(event) {

        event.preventDefault();

        const message =
            document.getElementById("signupMessage");

        const countryCode =
            document.getElementById("signupPhoneCode").value;

        const phone =
            document.getElementById("signupPhone").value.trim();

        const email =
            document.getElementById("signupEmail").value.trim();

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("signupConfirmPassword").value;

        if (!countryCode || !phone) {

            message.textContent =
                "Please enter your international phone number.";

            return;
        }

        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match.";

            return;
        }

        // Convert to international format
        const cleanPhone =
            phone.replace(/\D/g, "");

        const internationalPhone =
            countryCode + cleanPhone;

        message.textContent =
            "Creating your account...";

        /*
         * Supabase phone/password signup.
         *
         * No OTP is requested by this code.
         */

        const { data, error } =
            await supabaseClient.auth.signUp({

                phone: internationalPhone,

                password: password,

                options: {
                    data: {
                        email: email || null
                    }
                }
            });


        if (error) {

            message.textContent =
                error.message;

            return;
        }

        /*
         * Optional email is stored in user metadata.
         */

        message.textContent =
            "Account created successfully. You can now log in.";

        document.getElementById("signupForm").reset();

        document.getElementById("signupPhoneCode").value =
            "+234";

        setTimeout(function() {

            signupView.style.display = "none";
            loginView.style.display = "block";

        }, 1200);

    });


// =====================================================
// LOGIN
// =====================================================

document.getElementById("loginForm")
    ?.addEventListener("submit", async function(event) {

        event.preventDefault();

        const message =
            document.getElementById("loginMessage");

        const identifier =
            document.getElementById("loginIdentifier")
                .value
                .trim();

        const password =
            document.getElementById("loginPassword")
                .value;

        message.textContent =
            "Logging in...";


        /*
         * Email login
         */
        if (identifier.includes("@")) {

            const { data, error } =
                await supabaseClient.auth
                    .signInWithPassword({
                        email: identifier,
                        password: password
                    });

            if (error) {

                message.textContent =
                    error.message;

                return;
            }

            message.textContent =
                "Login successful.";

            showAccount(data.user);

            signupView.style.display = "none";
            loginView.style.display = "none";
            accountView.style.display = "block";

            return;
        }


        /*
         * Phone login
         *
         * Supabase requires the full international
         * number, e.g. +234XXXXXXXXXX.
         */
        let phoneNumber = identifier.replace(/\s/g, "");

        if (!phoneNumber.startsWith("+")) {

            message.textContent =
                "Enter your phone number with the country code, e.g. +234...";
            
            return;
        }


        const { data, error } =
            await supabaseClient.auth
                .signInWithPassword({
                    phone: phoneNumber,
                    password: password
                });


        if (error) {

            message.textContent =
                error.message;

            return;
        }


        message.textContent =
            "Login successful.";

        showAccount(data.user);

        signupView.style.display = "none";
        loginView.style.display = "none";
        accountView.style.display = "block";

    });


// =====================================================
// SHOW ACCOUNT
// =====================================================

function showAccount(user) {

    const phoneElement =
        document.getElementById("accountPhone");

    const emailElement =
        document.getElementById("accountEmail");

    if (phoneElement) {

        phoneElement.textContent =
            user.phone || "Not provided";
    }

    if (emailElement) {

        emailElement.textContent =
            user.user_metadata?.email ||
            "Not provided";
    }

    if (accountButton) {

        accountButton.textContent =
            "Account";
    }
}


// =====================================================
// LOGOUT
// =====================================================

document.getElementById("logoutButton")
    ?.addEventListener("click", async function() {

        await supabaseClient.auth.signOut();

        accountView.style.display = "none";
        loginView.style.display = "block";

    });


// =====================================================
// RESTORE SESSION
// =====================================================

supabaseClient.auth.onAuthStateChange(
    function(event, session) {

        if (session) {

            showAccount(session.user);

        }
    }
);


// =====================================================
// DELIVERY REQUEST → WHATSAPP
// =====================================================

const form =
    document.getElementById("requestForm");

if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const shipment =
                document.getElementById("shipment")
                    ?.value.trim() || "";

            const description =
                document.getElementById("description")
                    ?.value.trim() || "";

            const senderName =
                document.getElementById("senderName")
                    ?.value.trim() || "";

            const senderCountry =
                document.getElementById("senderCountry")
                    ?.value || "";

            const senderState =
                document.getElementById("senderState")
                    ?.value.trim() || "";

            const senderCity =
                document.getElementById("senderCity")
                    ?.value.trim() || "";

            const senderPhoneCode =
                document.getElementById("senderPhoneCode")
                    ?.value || "";

            const senderPhone =
                document.getElementById("senderPhone")
                    ?.value.trim() || "";

            const senderWhatsAppCode =
                document.getElementById("senderWhatsAppCode")
                    ?.value || "";

            const senderWhatsApp =
                document.getElementById("senderWhatsApp")
                    ?.value.trim() || "";

            const recipientName =
                document.getElementById("recipientName")
                    ?.value.trim() || "";

            const recipientCountry =
                document.getElementById("recipientCountry")
                    ?.value || "";

            const recipientState =
                document.getElementById("recipientState")
                    ?.value.trim() || "";

            const recipientCity =
                document.getElementById("recipientCity")
                    ?.value.trim() || "";

            const recipientPhoneCode =
                document.getElementById("recipientPhoneCode")
                    ?.value || "";

            const recipientPhone =
                document.getElementById("recipientPhone")
                    ?.value.trim() || "";

            const recipientWhatsAppCode =
                document.getElementById("recipientWhatsAppCode")
                    ?.value || "";

            const recipientWhatsApp =
                document.getElementById("recipientWhatsApp")
                    ?.value.trim() || "";


            const whatsappMessage = `
📦 *INTERNATIONAL DELIVERY REQUEST*

━━━━━━━━━━━━━━━━━━

📋 *SHIPMENT DETAILS*

Item:
${shipment}

Description:
${description}

━━━━━━━━━━━━━━━━━━

👤 *SENDER INFORMATION*

Name:
${senderName}

Country:
${senderCountry}

State:
${senderState}

City:
${senderCity}

Phone:
${senderPhoneCode} ${senderPhone}

WhatsApp:
${senderWhatsAppCode} ${senderWhatsApp}

━━━━━━━━━━━━━━━━━━

📍 *RECIPIENT INFORMATION*

Name:
${recipientName}

Country:
${recipientCountry}

State:
${recipientState}

City:
${recipientCity}

Phone:
${recipientPhoneCode} ${recipientPhone}

WhatsApp:
${recipientWhatsAppCode} ${recipientWhatsApp}

━━━━━━━━━━━━━━━━━━

💰 *DELIVERY FEE*

International Delivery Fee:
$1,000 USD

━━━━━━━━━━━━━━━━━━

Please review this delivery request.
`.trim();


            const whatsappNumber =
                "2349040071415";

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );

            window.location.href =
                whatsappURL;

        }
    );
}


// =====================================================
// START
// =====================================================

loadAccountCountryCodes();