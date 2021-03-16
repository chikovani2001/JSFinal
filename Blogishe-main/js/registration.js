import fetch from "./http.js";

validation();

const form = document.querySelector("#registration");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validation();

  const fullName = document.querySelector("#fullName").value;
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const confirm_password = document.querySelector("#confirm_password").value;

  if (password !== confirm_password) {
    return;
  }

  const user = { fullName, username, password };

  fetch("POST", "/users", user).then((res) => {
    if (res) {
      window.location.pathname = "/login.html";
    }
  });
});

function validation() {
  const validate = document.querySelectorAll(".form-control");
  validate.forEach((input) => {
    input.addEventListener("keyup", (event) => {
      console.log(event);
      const id = event.target.id;
      const value = event.target.value;
      const validation = event.target.nextElementSibling;
      if (id === "password") {
        if (value.length < 6 || value.length > 8) {
          validation.style.display = "block";
          submit.setAttribute('disabled', 'disabled');
        } else {
          validation.style.display = "none";
          submit.removeAttribute('disabled');
        }
      }
      if (id === "confirm_password") {
        const pass = document.querySelector("#password").value;
        if (pass.toString() != value.toString()) {
          validation.style.display = "block";
          submit.setAttribute('disabled', 'disabled');
        } else {
          validation.style.display = "none";
          submit.removeAttribute('disabled');
        }
      }

      if (id === "username" || id === "fullName") {
        if (!value) {
          validation.style.display = "block";
          submit.setAttribute('disabled', 'disabled');
        } else {
          validation.style.display = "none";
          submit.removeAttribute('disabled');
        }
      }
    });
  });
}