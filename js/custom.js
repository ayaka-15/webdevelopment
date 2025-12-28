function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneNumberError = document.getElementById("phoneNumberError");
    const feedbackError = document.getElementById("feedbackError");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneNumberError.textContent = "";
    feedbackError.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    }

    if (phoneNumber === "") {
        phoneNumberError.textContent = "Please enter your phone number.";
        isValid = false;
    }

    if (feedback === "") {
        feedbackError.textContent = "Please enter your feedback or order information.";
        isValid = false;
    }

    if (isValid) {
        const contactData = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            orderInfo: feedback
        };

        localStorage.setItem("contactFormData", JSON.stringify(contactData));

        alert("Thank you for your message.");
        event.target.reset();
    }
}
