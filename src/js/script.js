let emailField = document.getElementById('email');
let notifyButton = document.getElementById('notify');
let pingForm = document.getElementById("ping-form");
let error = document.getElementById("email-error")

emailField.addEventListener("click", emailValidation);

pingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // if (!/[\\]/g.test(emailField.value) || !/@.+/g.test(emailField.value)) {
    //     error.removeAttribute("hidden");
    //     console.log('a')
    //     emailField.value = "";
    // } else {
    //     console.log('b')
    //     error.setAttribute("hidde", true);
    //}


})

function emailValidation() {
    if (emailField.value == "Your email address...") {
        emailField.value = "";
    }
}


// sad@gmail.com
// dqmw@as.com
// sad@com
// asd@.com
// @.com
// asd\s@gmail.com
// sa@\gmail.com
//[^.]+[@.+]
//.+[^\/]@.+
//.+@.+[.][a-zA-z0-9]+