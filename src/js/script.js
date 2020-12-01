let emailField = document.getElementById('email');
let notifyButton = document.getElementById('notify');
let pingForm = document.getElementById("ping-form");
let error = document.getElementById("email-error")




pingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailField.value)) {
        error.style.visibility = "hidden";
        emailField.value = "";

    } else {
        error.style.visibility = "visible";
    }
});
