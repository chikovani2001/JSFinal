import fetch from "./http.js"



const form = document.querySelector("#login");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

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
    localStorage.setItem('username', user[0].username);
    window.location.pathname = "/main.html";
  }
});