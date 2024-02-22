let register_btn = document.querySelector(".signup-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");
let login_form_check = document.querySelector(".Login-form");
let signup_form_check=document.querySelector(".signup-form");

register_btn.addEventListener("click", () => {
  form.classList.add("change-form");
  form.classList.add("expanded");
});

login_btn.addEventListener("click", () => {
  form.classList.remove("change-form");
  form.classList.remove("expanded");
});
function validatePassword(password) {
    var specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    // Check if password length is at least 5 characters and contains at least one special character
    if (password.length < 5 || !specialCharacterRegex.test(password)) {
        return false;
    }

    return true;
}
login_form_check.addEventListener("submit", function(event) {
    var passwordInput = login_form_check.querySelector('input[type="password"]');
    var password = passwordInput.value;
    if (!validatePassword(password)) {
        event.preventDefault();
        alert("Password must be at least 5 characters long and contain at least one special character.");
    }
});
signup_form_check.addEventListener("submit", function(event) {
  var passwordInput = signup_form_check.querySelector('input[type="password"]');
  var password = passwordInput.value;
  if (!validatePassword(password)) {
      event.preventDefault();
      alert("Password must be at least 5 characters long and contain at least one special character.");
  }
});
login_form_check.addEventListener("submit", function(event) {
    var email_login = document.getElementById("emaillogin").value;
    if (!validate_email(email_login)) {
        event.preventDefault();
        alert("Email must end with @gmail.com");
    }
});
signup_form_check.addEventListener("submit", function(event) {
  var email_signup = document.getElementById("emailsignup").value;
  if (!validate_email(email_signup)) {
      event.preventDefault();
      alert("Email must end with @gmail.com");
  }
});


function validate_email(email){
    var emailregex = /@gmail.com$/;
    return emailregex.test(email);
}
function validate_phone(phone_no){
  var phoneregix=/d{10}/;
  return phoneregix.test(phone_no);
}

signup_form_check.addEventListener("submit" , function(event){
  var temp_phone = document.getElementById("pn").value;
  if (!validate_phone(temp_phone)) {
    event.preventDefault();
    alert("Your phone number is not in right format.Your phone number should have exactly 12 digits");
}

})