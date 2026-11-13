const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const submitButton = contactForm.querySelector("button[type='submit']");
    submitButton.disabled = true;
    formStatus.hidden = false;
    formStatus.textContent = "Sending your message...";

    try {
        const response = await fetch(contactForm.action, {
            method: contactForm.method,
            body: new FormData(contactForm),
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Formspree rejected the submission.");
        }

        formStatus.textContent =
            "Your message has been sent successfully! Thank you for contacting us.";
        contactForm.reset();
    } catch (error) {
        formStatus.textContent =
            "Your message could not be sent. Please try again later.";
        console.error(error);
    } finally {
        submitButton.disabled = false;
    }

});