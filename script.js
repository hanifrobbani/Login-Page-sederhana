const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showhidepw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    const pwField = eyeIcon.previousElementSibling; 
    if (pwField.type === "password") {
      pwField.type = "text";
      eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      pwField.type = "password";
      eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});


signUp.addEventListener("click", function () {
  container.classList.add("active");
});

login.addEventListener("click", function () {
  container.classList.remove("active");
});

function loginvalidation() {
  const email = document.forms.loginForm.email.value;
  const password = document.forms.loginForm.password.value;
  const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
  
  if (email.trim() === '' || !regEmail.test(email)) {
    alert("Please enter a valid email address.");
    document.forms.loginForm.email.focus();
    return false;
  }
  
  if (password.trim() === '') {
    alert("Please enter your password.");
    document.forms.loginForm.password.focus();
    return false;
  } else {
    alert("Login successful.");
    return true;
  }
}

