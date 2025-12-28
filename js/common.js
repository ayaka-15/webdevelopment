function subscribe() {
    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    alert("Thank you for subscribing.");
}