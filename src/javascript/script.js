let emailField = document.getElementById('email');
let notifyButton = document.getElementById('notify');
let pingForm = document.getElementById("ping-form")

emailField.addEventListener("click", emailValidation);

pingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    emailField.value = "";
})

function emailValidation() {
    if (emailField.value == "Your email address...") {
        emailField.value = "";
    }
}