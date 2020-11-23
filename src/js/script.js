let emailField = document.getElementById('email');
let notifyButton = document.getElementById('notify');
let pingForm = document.getElementById("ping-form");
let error = document.getElementById("email-error")

emailField.addEventListener("click", emailValidation);


//Node.insertBefore() !!!!!! для добавление элемента перед каким-то узлом а не в конец списка(для ошибки)
pingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (/.+@.+[.][a-zA-z0-9]+/g.test(emailField.value) || (emailField.value).inlcudes("\\")) {
        error.removeAttribute("hidden");
        emailField.value = "";
    } else {
        alert(`${emailField.value}`)
        error.setAttribute("hidde", true);
    }


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