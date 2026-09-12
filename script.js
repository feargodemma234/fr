/* =========================================================
   REQUESTHUB
   Supabase + Delivery Requests
   Phone + Password Authentication
   No Email
   No OTP
========================================================= */


/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://igikusqecnenjwbjoocf.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_-jFClaoda0zrYZ1V7q3qcg_tKNVPfdO";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );


/* =========================================================
   WHATSAPP DESTINATION
========================================================= */

const WHATSAPP_NUMBER = "2349040071415";

const DELIVERY_FEE = "$1,000 USD";


/* =========================================================
   ALL COUNTRIES + CALLING CODES
========================================================= */

const countries = [

    ["Afghanistan", "93"],
    ["Albania", "355"],
    ["Algeria", "213"],
    ["Andorra", "376"],
    ["Angola", "244"],
    ["Antigua and Barbuda", "1"],
    ["Argentina", "54"],
    ["Armenia", "374"],
    ["Australia", "61"],
    ["Austria", "43"],
    ["Azerbaijan", "994"],

    ["Bahamas", "1"],
    ["Bahrain", "973"],
    ["Bangladesh", "880"],
    ["Barbados", "1"],
    ["Belarus", "375"],
    ["Belgium", "32"],
    ["Belize", "501"],
    ["Benin", "229"],
    ["Bhutan", "975"],
    ["Bolivia", "591"],
    ["Bosnia and Herzegovina", "387"],
    ["Botswana", "267"],
    ["Brazil", "55"],
    ["Brunei", "673"],
    ["Bulgaria", "359"],
    ["Burkina Faso", "226"],
    ["Burundi", "257"],

    ["Cabo Verde", "238"],
    ["Cambodia", "855"],
    ["Cameroon", "237"],
    ["Canada", "1"],
    ["Central African Republic", "236"],
    ["Chad", "235"],
    ["Chile", "56"],
    ["China", "86"],
    ["Colombia", "57"],
    ["Comoros", "269"],
    ["Congo", "242"],
    ["Costa Rica", "506"],
    ["Croatia", "385"],
    ["Cuba", "53"],
    ["Cyprus", "357"],
    ["Czech Republic", "420"],

    ["Democratic Republic of the Congo", "243"],
    ["Denmark", "45"],
    ["Djibouti", "253"],
    ["Dominica", "1"],
    ["Dominican Republic", "1"],

    ["Ecuador", "593"],
    ["Egypt", "20"],
    ["El Salvador", "503"],
    ["Equatorial Guinea", "240"],
    ["Eritrea", "291"],
    ["Estonia", "372"],
    ["Eswatini", "268"],
    ["Ethiopia", "251"],

    ["Fiji", "679"],
    ["Finland", "358"],
    ["France", "33"],

    ["Gabon", "241"],
    ["Gambia", "220"],
    ["Georgia", "995"],
    ["Germany", "49"],
    ["Ghana", "233"],
    ["Greece", "30"],
    ["Grenada", "1"],
    ["Guatemala", "502"],
    ["Guinea", "224"],
    ["Guinea-Bissau", "245"],
    ["Guyana", "592"],

    ["Haiti", "509"],
    ["Honduras", "504"],
    ["Hungary", "36"],

    ["Iceland", "354"],
    ["India", "91"],
    ["Indonesia", "62"],
    ["Iran", "98"],
    ["Iraq", "964"],
    ["Ireland", "353"],
    ["Israel", "972"],
    ["Italy", "39"],
    ["Ivory Coast", "225"],

    ["Jamaica", "1"],
    ["Japan", "81"],
    ["Jordan", "962"],

    ["Kazakhstan", "7"],
    ["Kenya", "254"],
    ["Kiribati", "686"],
    ["Kuwait", "965"],
    ["Kyrgyzstan", "996"],

    ["Laos", "856"],
    ["Latvia", "371"],
    ["Lebanon", "961"],
    ["Lesotho", "266"],
    ["Liberia", "231"],
    ["Libya", "218"],
    ["Liechtenstein", "423"],
    ["Lithuania", "370"],
    ["Luxembourg", "352"],

    ["Madagascar", "261"],
    ["Malawi", "265"],
    ["Malaysia", "60"],
    ["Maldives", "960"],
    ["Mali", "223"],
    ["Malta", "356"],
    ["Marshall Islands", "692"],
    ["Mauritania", "222"],
    ["Mauritius", "230"],
    ["Mexico", "52"],
    ["Micronesia", "691"],
    ["Moldova", "373"],
    ["Monaco", "377"],
    ["Mongolia", "976"],
    ["Montenegro", "382"],
    ["Morocco", "212"],
    ["Mozambique", "258"],
    ["Myanmar", "95"],

    ["Namibia", "264"],
    ["Nauru", "674"],
    ["Nepal", "977"],
    ["Netherlands", "31"],
    ["New Zealand", "64"],
    ["Nicaragua", "505"],
    ["Niger", "227"],
    ["Nigeria", "234"],
    ["North Korea", "850"],
    ["North Macedonia", "389"],
    ["Norway", "47"],

    ["Oman", "968"],

    ["Pakistan", "92"],
    ["Palau", "680"],
    ["Palestine", "970"],
    ["Panama", "507"],
    ["Papua New Guinea", "675"],
    ["Paraguay", "595"],
    ["Peru", "51"],
    ["Philippines", "63"],
    ["Poland", "48"],
    ["Portugal", "351"],

    ["Qatar", "974"],

    ["Romania", "40"],
    ["Russia", "7"],
    ["Rwanda", "250"],

    ["Saint Kitts and Nevis", "1"],
    ["Saint Lucia", "1"],
    ["Saint Vincent and the Grenadines", "1"],
    ["Samoa", "685"],
    ["San Marino", "378"],
    ["Sao Tome and Principe", "239"],
    ["Saudi Arabia", "966"],
    ["Senegal", "221"],
    ["Serbia", "381"],
    ["Seychelles", "248"],
    ["Sierra Leone", "232"],
    ["Singapore", "65"],
    ["Slovakia", "421"],
    ["Slovenia", "386"],
    ["Solomon Islands", "677"],
    ["Somalia", "252"],
    ["South Africa", "27"],
    ["South Korea", "82"],
    ["South Sudan", "211"],
    ["Spain", "34"],
    ["Sri Lanka", "94"],
    ["Sudan", "249"],
    ["Suriname", "597"],
    ["Sweden", "46"],
    ["Switzerland", "41"],
    ["Syria", "963"],

    ["Taiwan", "886"],
    ["Tajikistan", "992"],
    ["Tanzania", "255"],
    ["Thailand", "66"],
    ["Timor-Leste", "670"],
    ["Togo", "228"],
    ["Tonga", "676"],
    ["Trinidad and Tobago", "1"],
    ["Tunisia", "216"],
    ["Turkey", "90"],
    ["Turkmenistan", "993"],
    ["Tuvalu", "688"],

    ["Uganda", "256"],
    ["Ukraine", "380"],
    ["United Arab Emirates", "971"],
    ["United Kingdom", "44"],
    ["United States", "1"],
    ["Uruguay", "598"],
    ["Uzbekistan", "998"],

    ["Vanuatu", "678"],
    ["Vatican City", "39"],
    ["Venezuela", "58"],
    ["Vietnam", "84"],

    ["Yemen", "967"],

    ["Zambia", "260"],
    ["Zimbabwe", "263"]

];


/* =========================================================
   ELEMENTS
========================================================= */

const requestForm =
    document.getElementById("requestForm");

const requestTypeInput =
    document.getElementById("requestType");

const senderCard =
    document.getElementById("senderCard");

const recipientTitle =
    document.getElementById("recipientTitle");

const recipientSubtitle =
    document.getElementById("recipientSubtitle");


/* =========================================================
   COUNTRY DROPDOWNS
========================================================= */

function fillCountries() {

    const countrySelects = [
        document.getElementById("senderCountry"),
        document.getElementById("recipientCountry")
    ];

    countrySelects.forEach(select => {

        if (!select) return;

        select.innerHTML =
            '<option value="">Select country</option>';

        countries.forEach(country => {

            const option =
                document.createElement("option");

            option.value = country[0];
            option.textContent = country[0];

            select.appendChild(option);

        });

    });
}


/* =========================================================
   PHONE COUNTRY CODES
========================================================= */

function fillCountryCodes() {

    const codeSelects = [
        document.getElementById("signupPhoneCode"),
        document.getElementById("loginPhoneCode"),
        document.getElementById("senderPhoneCode"),
        document.getElementById("senderWhatsAppCode"),
        document.getElementById("recipientPhoneCode"),
        document.getElementById("recipientWhatsAppCode")
    ];

    codeSelects.forEach(select => {

        if (!select) return;

        select.innerHTML = "";

        countries.forEach(country => {

            const option =
                document.createElement("option");

            option.value = country[1];

            option.textContent =
                `${country[0]} (+${country[1]})`;

            select.appendChild(option);

        });

    });


    /* Default Nigeria */

    codeSelects.forEach(select => {

        if (!select) return;

        const nigeria =
            Array.from(select.options)
                .find(option => option.value === "234");

        if (nigeria) {
            select.value = "234";
        }

    });
}


/* =========================================================
   PHONE CREATOR
========================================================= */

function createPhone(code, number) {

    let cleanNumber =
        String(number || "")
            .replace(/\D/g, "");

    cleanNumber =
        cleanNumber.replace(/^0+/, "");

    return "+" + code + cleanNumber;
}


/* =========================================================
   REQUEST TYPE
========================================================= */

document.querySelectorAll(".request-type")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".request-type")
                .forEach(btn => {
                    btn.classList.remove("active");
                });

            button.classList.add("active");

            const type =
                button.dataset.type;

            requestTypeInput.value = type;

            const sendReceive =
                type === "send-receive";


            /* Show / hide sender */

            senderCard.style.display =
                sendReceive ? "block" : "none";


            /* Required fields */

            senderCard
                .querySelectorAll(
                    "input, select, textarea"
                )
                .forEach(field => {

                    field.required =
                        sendReceive;

                });


            /* Change receiver wording */

            if (sendReceive) {

                recipientTitle.textContent =
                    "Receiving Information";

                recipientSubtitle.textContent =
                    "Where should the item be delivered?";

            } else {

                recipientTitle.textContent =
                    "Receiving Information";

                recipientSubtitle.textContent =
                    "Tell us where you need the item delivered.";

            }

        });

    });


/* =========================================================
   DELIVERY REQUEST
========================================================= */

requestForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const requestType =
        requestTypeInput.value;


    const shipment =
        document.getElementById("shipment").value.trim();

    const description =
        document.getElementById("description").value.trim();


    /* RECEIVER */

    const recipientName =
        document.getElementById("recipientName").value.trim();

    const recipientCountry =
        document.getElementById("recipientCountry").value;

    const recipientState =
        document.getElementById("recipientState").value.trim();

    const recipientCity =
        document.getElementById("recipientCity").value.trim();

    const recipientPhone =
        createPhone(
            document.getElementById("recipientPhoneCode").value,
            document.getElementById("recipientPhone").value
        );

    const recipientWhatsApp =
        createPhone(
            document.getElementById("recipientWhatsAppCode").value,
            document.getElementById("recipientWhatsApp").value
        );


    let message = "";


    /* HEADER */

    message +=
        "📦 REQUESTHUB DELIVERY REQUEST\n\n";


    if (requestType === "send-receive") {

        message +=
            "📦 REQUEST TYPE: SEND & RECEIVE\n\n";

    } else {

        message +=
            "📥 REQUEST TYPE: RECEIVE ONLY\n\n";

    }


    /* SHIPMENT */

    message +=
        "📦 SHIPMENT DETAILS\n";

    message +=
        "Item: " + shipment + "\n";

    message +=
        "Description: " + description + "\n\n";


    /* SENDER */

    if (requestType === "send-receive") {

        const senderName =
            document.getElementById("senderName").value.trim();

        const senderCountry =
            document.getElementById("senderCountry").value;

        const senderState =
            document.getElementById("senderState").value.trim();

        const senderCity =
            document.getElementById("senderCity").value.trim();

        const senderPhone =
            createPhone(
                document.getElementById("senderPhoneCode").value,
                document.getElementById("senderPhone").value
            );

        const senderWhatsApp =
            createPhone(
                document.getElementById("senderWhatsAppCode").value,
                document.getElementById("senderWhatsApp").value
            );


        message +=
            "📤 SENDING INFORMATION\n";

        message +=
            "Name: " + senderName + "\n";

        message +=
            "Country: " + senderCountry + "\n";

        message +=
            "State / Region: " + senderState + "\n";

        message +=
            "City: " + senderCity + "\n";

        message +=
            "Phone: " + senderPhone + "\n";

        message +=
            "WhatsApp: " + senderWhatsApp + "\n\n";

    }


    /* RECEIVER */

    message +=
        "📥 RECEIVING INFORMATION\n";

    message +=
        "Name: " + recipientName + "\n";

    message +=
        "Country: " + recipientCountry + "\n";

    message +=
        "State / Region: " + recipientState + "\n";

    message +=
        "City: " + recipientCity + "\n";

    message +=
        "Phone: " + recipientPhone + "\n";

    message +=
        "WhatsApp: " + recipientWhatsApp + "\n\n";


    /* FEE */

    message +=
        "💵 DELIVERY FEE: " + DELIVERY_FEE + "\n\n";

    message +=
        "Please review this delivery request.";


    /* OPEN WHATSAPP */

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

});


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

const signupView =
    document.getElementById("signupView");

const loginView =
    document.getElementById("loginView");

const accountView =
    document.getElementById("accountView");


function openAuth() {

    authModal.classList.add("show");

}


function closeAuthModal() {

    authModal.classList.remove("show");

}


accountButton.addEventListener(
    "click",
    openAuth
);

closeAuth.addEventListener(
    "click",
    closeAuthModal
);

modalOverlay.addEventListener(
    "click",
    closeAuthModal
);


/* =========================================================
   SWITCH AUTH VIEWS
========================================================= */

document.getElementById("goLogin")
    .addEventListener("click", () => {

        signupView.classList.add("hidden");
        accountView.classList.add("hidden");

        loginView.classList.remove("hidden");

    });


document.getElementById("goSignup")
    .addEventListener("click", () => {

        loginView.classList.add("hidden");
        accountView.classList.add("hidden");

        signupView.classList.remove("hidden");

    });


/* =========================================================
   SIGN UP
========================================================= */

const signupForm =
    document.getElementById("signupForm");

signupForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const code =
            document.getElementById(
                "signupPhoneCode"
            ).value;

        const phone =
            document.getElementById(
                "signupPhone"
            ).value;

        const password =
            document.getElementById(
                "signupPassword"
            ).value;

        const confirmPassword =
            document.getElementById(
                "signupConfirmPassword"
            ).value;

        const message =
            document.getElementById(
                "signupMessage"
            );


        message.textContent = "";


        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match.";

            return;

        }


        if (password.length < 6) {

            message.textContent =
                "Password must be at least 6 characters.";

            return;

        }


        const fullPhone =
            createPhone(code, phone);


        message.textContent =
            "Creating your account...";


        try {

            const {
                data,
                error
            } =
                await supabaseClient.auth.signUp({
                    phone: fullPhone,
                    password: password
                });


            if (error) {
                throw error;
            }


            message.textContent =
                "Account created successfully. You can now log in.";

            signupForm.reset();


            setTimeout(() => {

                signupView.classList.add("hidden");
                loginView.classList.remove("hidden");

            }, 1200);


        } catch (error) {

            message.textContent =
                error.message || "Could not create account.";

        }

    }
);


/* =========================================================
   LOGIN
========================================================= */

const loginForm =
    document.getElementById("loginForm");

loginForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const code =
            document.getElementById(
                "loginPhoneCode"
            ).value;

        const phone =
            document.getElementById(
                "loginPhone"
            ).value;

        const password =
            document.getElementById(
                "loginPassword"
            ).value;

        const message =
            document.getElementById(
                "loginMessage"
            );


        const fullPhone =
            createPhone(code, phone);


        message.textContent =
            "Logging in...";


        try {

            const {
                data,
                error
            } =
                await supabaseClient.auth.signInWithPassword({
                    phone: fullPhone,
                    password: password
                });


            if (error) {
                throw error;
            }


            message.textContent =
                "Login successful.";

            showAccount(data.user);


        } catch (error) {

            message.textContent =
                error.message || "Login failed.";

        }

    }
);


/* =========================================================
   SHOW ACCOUNT
========================================================= */

function showAccount(user) {

    signupView.classList.add("hidden");
    loginView.classList.add("hidden");

    accountView.classList.remove("hidden");


    document.getElementById(
        "accountPhone"
    ).textContent =
        user?.phone || "No phone number";
}


/* =========================================================
   LOGOUT
========================================================= */

document.getElementById("logoutButton")
    .addEventListener(
        "click",
        async () => {"document.getElementById("logoutButton")
    .addEventListener(
        "click",
        async () => {

            await supabaseClient.auth.signOut();

            accountView.classList.add("hidden");

            loginView.classList.remove("hidden");

            accountButton.textContent = "Account";

        }
    );


/* =========================================================
   CHECK CURRENT SESSION
========================================================= */

async function checkSession() {

    try {

        const { data } =
            await supabaseClient.auth.getSession();

        if (data.session) {

            accountButton.textContent =
                "My Account";

        }

    } catch (error) {

        console.error(
            "Session error:",
            error
        );

    }

}


/* =========================================================
   AUTH STATE CHANGES
========================================================= */

supabaseClient.auth.onAuthStateChange(
    (event, session) => {

        if (session?.user) {

            accountButton.textContent =
                "My Account";

        } else {

            accountButton.textContent =
                "Account";

        }

    }
);


/* =========================================================
   START
========================================================= */

fillCountryCodes();

fillCountries();

checkSession();