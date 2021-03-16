import fetch from "./http.js";

validation();


function validation() {
    const validate = document.querySelectorAll(".form-control");
    const submit = document.querySelector("#submit");
    validate.forEach((input) => {
      input.addEventListener("keyup", (event) => {
        const id = event.target.id;
        const value = event.target.value;
        const validation = event.target.nextElementSibling;
        
        if (id === "username" || id === "password") {
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
  

  const form = document.querySelector("#login");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  validation();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const unautorized = document.querySelector("#unautorized");

  if (!username || !password) {
    return;
  }

  const user = await fetch("GET", `/users?username=${username}&password=${password}`);

  if(user && !user.length){
    unautorized.classList.replace("hide", "show")
  } else {
    unautorized.classList.replace("show", "hide")
    localStorage.setItem('isAuthorized', 'true');
    localStorage.setItem('fullName', user[0].fullName);
    window.location.pathname = "/";
  }
});