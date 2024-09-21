SCOPES = ['https://www.googleapis.com/auth/gmail.send']


function sendMail(e) {
    e.preventDefault();
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        message: document.getElementById("message").value 
    };

    emailjs.send("service_iqj658w", "template_deut9s9", params)
    .then(() => {
        alert("Email sent successfully");
    })
    .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
    });
}

