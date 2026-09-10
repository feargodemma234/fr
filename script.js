// ==========================================
// YOUR RECEIVING EMAIL
// ==========================================

const RECEIVING_EMAIL = "yourbusiness@gmail.com";


// ==========================================
// CURRENT PRODUCT
// ==========================================

let selectedProduct = {
    name: "",
    price: "",
    description: "",
    image: ""
};


// ==========================================
// OPEN REQUEST FORM
// ==========================================

function openRequestForm(name, price, description) {

    selectedProduct.name = name;
    selectedProduct.price = price;
    selectedProduct.description = description;

    document.getElementById("selectedProductName").textContent = name;

    document.getElementById("selectedProductPrice").textContent = price;

    // Find product image from the clicked card
    const buttons = document.querySelectorAll(".request-button");

    buttons.forEach(button => {

        if (button.getAttribute("onclick")?.includes(name)) {

            const card = button.closest(".product-card");

            if (card) {

                const image = card.querySelector("img");

                if (image) {
                    selectedProduct.image = image.src;
                    document.getElementById("modalProductImage").src = image.src;
                }

            }

        }

    });

    document.getElementById("requestModal").classList.add("active");

    document.body.style.overflow = "hidden";
}


// ==========================================
// CLOSE REQUEST FORM
// ==========================================

function closeRequestForm() {

    document.getElementById("requestModal").classList.remove("active");

    document.body.style.overflow = "auto";
}


// ==========================================
// CLOSE WHEN CLICKING OUTSIDE
// ==========================================

document.getElementById("requestModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeRequestForm();
    }

});


// ==========================================
// SEND REQUEST
// ==========================================

document.getElementById("requestForm").addEventListener("submit", function(event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const country = document.getElementById("country").value.trim();

    const state = document.getElementById("state").value.trim();

    const city = document.getElementById("city").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    // ==========================================
    // EMAIL SUBJECT
    // ==========================================

    const subject =
        "Product Request - " + selectedProduct.name;


    // ==========================================
    // EMAIL BODY
    // ==========================================

    let body = "";

    body += "PRODUCT REQUEST\n";
    body += "==============================\n\n";

    body += "Product: " + selectedProduct.name + "\n";
    body += "Price: " + selectedProduct.price + "\n\n";

    body += "CUSTOMER INFORMATION\n";
    body += "==============================\n\n";

    body += "Name: " + name + "\n";
    body += "Country: " + country + "\n";
    body += "State: " + state + "\n";
    body += "City: " + city + "\n";
    body += "Phone: " + phone + "\n";

    if (email !== "") {
        body += "Email: " + email + "\n";
    } else {
        body += "Email: Not provided\n";
    }

    body += "\nREQUEST\n";
    body += "==============================\n\n";

    if (message !== "") {
        body += message + "\n";
    } else {
        body += "I would like to request this product.\n";
    }


    // ==========================================
    // CREATE MAILTO LINK
    // ==========================================

    const mailto =
        "mailto:" +
        encodeURIComponent(RECEIVING_EMAIL) +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);


    // ==========================================
    // OPEN EMAIL APP
    // ==========================================

    window.location.href = mailto;

});