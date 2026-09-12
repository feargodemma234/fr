document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("requestForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        // STOP the page from refreshing
        event.preventDefault();

        // Get all form values
        const shipment = document.getElementById("shipment")?.value.trim() || "";
        const description = document.getElementById("description")?.value.trim() || "";

        const senderName = document.getElementById("senderName")?.value.trim() || "";
        const senderCountry = document.getElementById("senderCountry")?.value || "";
        const senderState = document.getElementById("senderState")?.value.trim() || "";
        const senderCity = document.getElementById("senderCity")?.value.trim() || "";

        const senderPhoneCode = document.getElementById("senderPhoneCode")?.value || "";
        const senderPhone = document.getElementById("senderPhone")?.value.trim() || "";

        const senderWhatsAppCode =
            document.getElementById("senderWhatsAppCode")?.value || "";
        const senderWhatsApp =
            document.getElementById("senderWhatsApp")?.value.trim() || "";

        const recipientName =
            document.getElementById("recipientName")?.value.trim() || "";
        const recipientCountry =
            document.getElementById("recipientCountry")?.value || "";
        const recipientState =
            document.getElementById("recipientState")?.value.trim() || "";
        const recipientCity =
            document.getElementById("recipientCity")?.value.trim() || "";

        const recipientPhoneCode =
            document.getElementById("recipientPhoneCode")?.value || "";
        const recipientPhone =
            document.getElementById("recipientPhone")?.value.trim() || "";

        const recipientWhatsAppCode =
            document.getElementById("recipientWhatsAppCode")?.value || "";
        const recipientWhatsApp =
            document.getElementById("recipientWhatsApp")?.value.trim() || "";

        // Build WhatsApp message
        const message = `
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

        // Your receiving WhatsApp number
        const whatsappNumber = "2349040071415";

        // Encode message safely
        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

        // Open WhatsApp
        window.location.href = whatsappURL;
    });

});