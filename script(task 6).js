document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll("small").forEach(small => small.innerText = "");
        document.querySelectorAll("input, textarea").forEach(input => input.classList.remove("error"));

        // Validate Name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required.");
            isValid = false;
        }

        // Validate Email
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Message cannot be empty.");
            isValid = false;
        }

        // If all validations pass, show success message
        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });

    function showError(input, message) {
        const formControl = input.nextElementSibling;
        formControl.innerText = message;
        input.classList.add("error");
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
