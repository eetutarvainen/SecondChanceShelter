const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault(); // this prevents sending emails in development phase until removed

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    formStatus.textContent =
        "Your message has been sent successfully! Thank you for contacting us.";

    formStatus.hidden = false;

    contactForm.reset();

});