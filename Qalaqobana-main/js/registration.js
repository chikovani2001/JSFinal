import fetch from "./http.js"

const form = document.querySelector('#registration')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const born = document.querySelector('#born').value;
    const gender = document.querySelector('#gender').value;

    const user = {
        username,
        password,
        born,
        gender
    }
fetch('POST', '/users',user)    
.then(res => {
    if(res){
        window.location.pathname = '/login.html'
    }
})
})
