import fetch from "./http.js";
import {isAuthorithed, authUser} from "./auth.js";

if(!isAuthorithed()){
    window.location.pathname = '/';
}
const params = new URLSearchParams(window.location.search)

const id = params.get("id");
if(id){
    setBlogPost();
}

async function setBlogPost(){
    const post = await fetch("GET", `/posts/${id}`);
    const name = document.querySelector('#name');
    const content = document.querySelector('#content');
    const description = document.querySelector('#description');
    const image = document.querySelector('#image');
    
    name.value = post.title
    content.value = post.content
    description.value = post.description
    image.value = post.image
}

const addBlog = document.querySelector('#add-blog');
addBlog.addEventListener("submit", id ? editBlog : addNewBlog)



function editBlog(e){
    e.preventDefault()
    e.stopPropagation()
    const name = document.querySelector('#name').value;
    const content = document.querySelector('#content').value;
    const description = document.querySelector('#description').value;
    const image = document.querySelector('#image').value;

    const post = {
        title: name,
        content,
        image,
        description,
    }

    fetch("PATCH", `/posts/${id}`, post)
    .then( res => {
        console.log(res);
        return
    });
    return;
    
}


function addNewBlog(e){
    e.preventDefault()
    e.stopPropagation()
   
    const name = document.querySelector('#name').value;
    const content = document.querySelector('#content').value;
    const description = document.querySelector('#description').value;
    const image = document.querySelector('#image').value;

    const post = {
        title: name,
        author: authUser(),
        content,
        image,
        description,
        createDate: new Date().toDateString()
    }

    fetch("POST", "/posts", post)
    .then( res => {
        console.log(res);
        return
    });
    return;
}



