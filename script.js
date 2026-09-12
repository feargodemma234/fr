/* =========================
   REQUESTHUB
========================= */

const SUPABASE_URL =
"https://igikusqecnenjwbjoocf.supabase.co";

const SUPABASE_KEY =
"sb_publishable_-jFClaoda0zrYZ1V7q3qcg_tKNVPfdO";

const supabaseClient =
window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const WA = "2349040071415";
const FEE = "$1,000 USD";


/* =========================
   COUNTRIES
========================= */

const countries = [
["Afghanistan","93"],["Albania","355"],["Algeria","213"],
["Andorra","376"],["Angola","244"],["Antigua and Barbuda","1"],
["Argentina","54"],["Armenia","374"],["Australia","61"],
["Austria","43"],["Azerbaijan","994"],["Bahamas","1"],
["Bahrain","973"],["Bangladesh","880"],["Barbados","1"],
["Belarus","375"],["Belgium","32"],["Belize","501"],
["Benin","229"],["Bhutan","975"],["Bolivia","591"],
["Bosnia and Herzegovina","387"],["Botswana","267"],
["Brazil","55"],["Brunei","673"],["Bulgaria","359"],
["Burkina Faso","226"],["Burundi","257"],["Cabo Verde","238"],
["Cambodia","855"],["Cameroon","237"],["Canada","1"],
["Central African Republic","236"],["Chad","235"],["Chile","56"],
["China","86"],["Colombia","57"],["Comoros","269"],
["Congo","242"],["Costa Rica","506"],["Croatia","385"],
["Cuba","53"],["Cyprus","357"],["Czech Republic","420"],
["Democratic Republic of the Congo","243"],["Denmark","45"],
["Djibouti","253"],["Dominica","1"],
["Dominican Republic","1"],["Ecuador","593"],["Egypt","20"],
["El Salvador","503"],["Equatorial Guinea","240"],
["Eritrea","291"],["Estonia","372"],["Eswatini","268"],
["Ethiopia","251"],["Fiji","679"],["Finland","358"],
["France","33"],["Gabon","241"],["Gambia","220"],
["Georgia","995"],["Germany","49"],["Ghana","233"],
["Greece","30"],["Grenada","1"],["Guatemala","502"],
["Guinea","224"],["Guinea-Bissau","245"],["Guyana","592"],
["Haiti","509"],["Honduras","504"],["Hungary","36"],
["Iceland","354"],["India","91"],["Indonesia","62"],
["Iran","98"],["Iraq","964"],["Ireland","353"],
["Israel","972"],["Italy","39"],["Ivory Coast","225"],
["Jamaica","1"],["Japan","81"],["Jordan","962"],
["Kazakhstan","7"],["Kenya","254"],["Kiribati","686"],
["Kuwait","965"],["Kyrgyzstan","996"],["Laos","856"],
["Latvia","371"],["Lebanon","961"],["Lesotho","266"],
["Liberia","231"],["Libya","218"],["Liechtenstein","423"],
["Lithuania","370"],["Luxembourg","352"],["Madagascar","261"],
["Malawi","265"],["Malaysia","60"],["Maldives","960"],
["Mali","223"],["Malta","356"],["Marshall Islands","692"],
["Mauritania","222"],["Mauritius","230"],["Mexico","52"],
["Micronesia","691"],["Moldova","373"],["Monaco","377"],
["Mongolia","976"],["Montenegro","382"],["Morocco","212"],
["Mozambique","258"],["Myanmar","95"],["Namibia","264"],
["Nauru","674"],["Nepal","977"],["Netherlands","31"],
["New Zealand","64"],["Nicaragua","505"],["Niger","227"],
["Nigeria","234"],["North Korea","850"],
["North Macedonia","389"],["Norway","47"],["Oman","968"],
["Pakistan","92"],["Palau","680"],["Palestine","970"],
["Panama","507"],["Papua New Guinea","675"],
["Paraguay","595"],["Peru","51"],["Philippines","63"],
["Poland","48"],["Portugal","351"],["Qatar","974"],
["Romania","40"],["Russia","7"],["Rwanda","250"],
["Saint Kitts and Nevis","1"],["Saint Lucia","1"],
["Saint Vincent and the Grenadines","1"],["Samoa","685"],
["San Marino","378"],["Sao Tome and Principe","239"],
["Saudi Arabia","966"],["Senegal","221"],["Serbia","381"],
["Seychelles","248"],["Sierra Leone","232"],["Singapore","65"],
["Slovakia","421"],["Slovenia","386"],
["Solomon Islands","677"],["Somalia","252"],
["South Africa","27"],["South Korea","82"],
["South Sudan","211"],["Spain","34"],["Sri Lanka","94"],
["Sudan","249"],["Suriname","597"],["Sweden","46"],
["Switzerland","41"],["Syria","963"],["Taiwan","886"],
["Tajikistan","992"],["Tanzania","255"],["Thailand","66"],
["Timor-Leste","670"],["Togo","228"],["Tonga","676"],
["Trinidad and Tobago","1"],["Tunisia","216"],
["Turkey","90"],["Turkmenistan","993"],["Tuvalu","688"],
["Uganda","256"],["Ukraine","380"],
["United Arab Emirates","971"],["United Kingdom","44"],
["United States","1"],["Uruguay","598"],["Uzbekistan","998"],
["Vanuatu","678"],["Vatican City","39"],
["Venezuela","58"],["Vietnam","84"],["Yemen","967"],
["Zambia","260"],["Zimbabwe","263"]
];


/* =========================
   COUNTRY SELECTS
========================= */

function fillCountries(){

    const select =
        document.getElementById("recipientCountry");

    countries.forEach(([name,code])=>{

        const option =
            document.createElement("option");

        option.value = name;
        option.textContent =
            `${name} (+${code})`;

        select.appendChild(option);
    });
}


function fillCodes(){

    const ids = [
        "signupPhoneCode",
        "loginPhoneCode",
        "recipientPhoneCode",
        "recipientWhatsAppCode"
    ];

    ids.forEach(id=>{

        const select =
            document.getElementById(id);

        countries.forEach(([name,code])=>{

            const option =
                document.createElement("option");

            option.value = code;
            option.textContent =
                `${name} (+${code})`;

            select.appendChild(option);

        });

        select.value = "234";
    });
}


/* =========================
   PHONE
========================= */

function phone(code,number){

    const n =
        String(number || "")
        .replace(/\D/g,"")
        .replace(/^0+/,"");

    return "+" + code + n;
}


/* =========================
   RECEIVE REQUEST
========================= */

document
.getElementById("requestForm")
.addEventListener("submit",e=>{

    e.preventDefault();

    const item =
        document.getElementById("shipment").value.trim();

    const description =
        document.getElementById("description").value.trim();

    const name =
        document.getElementById("recipientName").value.trim();

    const country =
        document.getElementById("recipientCountry").value;

    const state =
        document.getElementById("recipientState").value.trim();

    const city =
        document.getElementById("recipientCity").value.trim();

    const userPhone =
        phone(
            document.getElementById("recipientPhoneCode").value,
            document.getElementById("recipientPhone").value
        );

    const whatsapp =
        phone(
            document.getElementById("recipientWhatsAppCode").value,
            document.getElementById("recipientWhatsApp").value
        );


    const message =
`📥 REQUESTHUB RECEIVE REQUEST

📦 ITEM
Item: ${item}
Description: ${description}

📥 RECEIVING INFORMATION
Name: ${name}
Country: ${country}
State / Region: ${state}
City: ${city}
Phone: ${userPhone}
WhatsApp: ${whatsapp}

💵 DELIVERY FEE: ${FEE}

Please review this receiving request.`;


    window.open(
        "https://wa.me/" +
        WA +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );

});


/* =========================
   ACCOUNT MODAL
========================= */

const modal =
    document.getElementById("authModal");

const accountButton =
    document.getElementById("accountButton");


function openAccount(){
    modal.classList.add("show");
}


function closeAccount(){
    modal.classList.remove("show");
}


accountButton.onclick =
    openAccount;


document.getElementById("closeAuth")
.onclick =
    closeAccount;


document.getElementById("modalOverlay")
.onclick =
    closeAccount;


/* =========================
   AUTH VIEWS
========================= */

const signupView =
    document.getElementById("signupView");

const loginView =
    document.getElementById("loginView");

const accountView =
    document.getElementById("accountView");


document.getElementById("goLogin")
.onclick = ()=>{

    signupView.classList.add("hidden");
    loginView.classList.remove("hidden");

};


document.getElementById("goSignup")
.onclick = ()=>{

    loginView.classList.add("hidden");
    signupView.classList.remove("hidden");

};


/* =========================
   SIGN UP
========================= */

document
.getElementById("signupForm")
.addEventListener("submit",async e=>{

    e.preventDefault();

    const code =
        document.getElementById("signupPhoneCode").value;

    const number =
        document.getElementById("signupPhone").value;

    const password =
        document.getElementById("signupPassword").value;

    const confirm =
        document.getElementById(
            "signupConfirmPassword"
        ).value;

    const message =
        document.getElementById("signupMessage");


    if(password !== confirm){

        message.textContent =
            "Passwords do not match.";

        return;
    }


    if(password.length < 6){

        message.textContent =
            "Password must be at least 6 characters.";

        return;
    }


    message.textContent =
        "Creating account...";


    try{

        const {error} =
            await supabaseClient.auth.signUp({

                phone:phone(code,number),

                password:password

            });


        if(error) throw error;


        message.textContent =
            "Account created. You can now login.";

        document
        .getElementById("signupForm")
        .reset();


        setTimeout(()=>{

            signupView.classList.add("hidden");
            loginView.classList.remove("hidden");

        },1000);


    }catch(error){

        message.textContent =
            error.message;

    }

});


/* =========================
   LOGIN
========================= */

document
.getElementById("loginForm")
.addEventListener("submit",async e=>{

    e.preventDefault();

    const code =
        document.getElementById("loginPhoneCode").value;

    const number =
        document.getElementById("loginPhone").value;

    const password =
        document.getElementById("loginPassword").value;

    const message =
        document.getElementById("loginMessage");


    message.textContent =
        "Logging in...";


    try{

        const {data,error} =
            await supabaseClient.auth
            .signInWithPassword({

                phone:phone(code,number),

                password:password

            });


        if(error) throw error;


        showAccount(data.user);

    }catch(error){

        message.textContent =
            error.message;

    }

});


/* =========================
   SHOW ACCOUNT
========================= */

function showAccount(user){

    signupView.classList.add("hidden");
    loginView.classList.add("hidden");
    accountView.classList.remove("hidden");

    document.getElementById(
        "accountPhone"
    ).textContent =
        user?.phone || "No phone number";

    accountButton.textContent =
        "👤 My Account";
}


/* =========================
   LOGOUT
========================= */

document
.getElementById("logoutButton")
.addEventListener("click",async()=>{

    await supabaseClient.auth.signOut();

    accountView.classList.add("hidden");
    loginView.classList.remove("hidden");

    accountButton.textContent =
        "👤 Account";

});


/* =========================
   EXISTING SESSION
========================= */

async function checkSession(){

    const {data} =
        await supabaseClient.auth.getSession();

    if(data.session){

        showAccount(
            data.session.user
        );

    }
}


/* =========================
   AUTH STATE
========================= */

supabaseClient.auth.onAuthStateChange(
    (event,session)=>{

        if(session?.user){

            accountButton.textContent =
                "👤 My Account";

        }else{

            accountButton.textContent =
                "👤 Account";

        }

    }
);


/* =========================
   START
========================= */

fillCountries();
fillCodes();
checkSession();