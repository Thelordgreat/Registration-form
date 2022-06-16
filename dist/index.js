// const form = document.querySelector('form');
// const firstName = document.getElementById('firstName');
// const lastName = document.getElementById('lastName');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// });

// function checkInputs() {
//     // get the values from the inputs
//     const firstNameValue = firstName.value.trim();
//     const lastNameValue = lastName.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();

//     if (firstNameValue === '') {
//         setErrorFor(firstName, 'First name cannot be blank');
//     } else {
//         // add success class
//         setSuccessFor(firstName);
//     }
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     formControl.className = 'form-control error error';
//     small.innerText = message;
// }