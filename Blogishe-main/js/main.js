import fetch from "./http.js";
import {isAuthorithed} from "./auth.js";

const nav = document.querySelector("#menu");
setNavigation();

function setNavigation() {
  fetch("GET", "/navigation").then((navigation) => {
    let menuNavigation = navigation.guest;
    if(isAuthorithed()){
      menuNavigation = navigation.user;
    }
    menuNavigation.forEach((element) => {
      const li = document.createElement("li");
      li.classList.add("nav-item");
      const a = document.createElement("a");
      a.classList.add("nav-link");
      a.setAttribute("href", element.url);
      a.setAttribute("id", element.idName);
      a.textContent = element.name;
      li.append(a);
      nav.append(li);  
      
      
      a.addEventListener("click", (e) => {
        if(e.target.id === "logout"){
          e.preventDefault();
          localStorage.removeItem("isAuthorized")
          localStorage.removeItem("fullName")
          window.location = "/"
        }
      })  
    });
  });
}
