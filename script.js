document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bookingForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the default form submission action

        // Here you can add code to handle the form data as needed

        // Display the thank you message
        thankYouMessage.style.display = "block";

        // Optionally, clear the form fields
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('.contact-section form');
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = "Thank you for your message! We will get back to you soon.";
    thankYouMessage.style.display = "none";
    thankYouMessage.style.color = "#1c3d63";
    thankYouMessage.style.marginTop = "20px";
    thankYouMessage.style.fontSize = "1.2rem";
    thankYouMessage.style.fontWeight = "bold";

    contactForm.appendChild(thankYouMessage);

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the default form submission action

        // Display the thank you message
        thankYouMessage.style.display = "block";

        // Optionally, clear the form fields
        contactForm.reset();
    });
});
