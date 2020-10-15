const form = document.getElementById("form");
const confirmation = document.getElementById("confirmation");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit" , (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(firstnameValue === "") {
        setErrorFor(firstname, "First Name cannot be empty");
    } else {
        setSuccessFor(firstname);
    }

    if(lastnameValue === "") {
        setErrorFor(lastname, "last Name cannot be empty");
    } else {
        setSuccessFor(lastname);
    }

    if(emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
    } else if(!validateEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email");
    }else {
        setSuccessFor(email);
    }

    if(passwordValue === "") {
        setErrorFor(password, "Password cannot be empty");
    } else {
        setSuccessFor(password);
    }

}

function setErrorFor(input,  message) {
    const contain = input.parentElement;
    const small = contain.querySelector("small");

    small.innerText = message;
    contain.className = "contain failure";
}

function setSuccessFor(input) {
    const contain = input.parentElement;
    contain.className = "contain success"
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

