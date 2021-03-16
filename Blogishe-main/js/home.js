import fetch from "./http.js";
import {isAuthorithed,authUser} from "./auth.js";
import { postDelete } from "./post.js"

const posts = document.querySelector("#posts");

fetch("GET", "/posts").then((items) => {
  items.forEach((post) => {
    const postTemplate = document.querySelector("#post-preview");
    const clone = postTemplate.content.cloneNode(true);
    const element = clone.children[0];
    const a = element.getElementsByTagName("a");
    a[0].setAttribute("href", `/post.html?id=${post.id}`);
    a[1].setAttribute("href", `/author.html?author=${post.author}`);
    clone.querySelector(".post-title").textContent = post.title;
    clone.querySelector(".post-subtitle").textContent = post.description;
    clone.querySelector(".author").textContent = post.author;
    clone.querySelector(".create-date").textContent = post.createDate;
    posts.append(clone);
    if (isAuthorithed() && authUser() === post.author) {
      const secure = document.createElement("div");
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("btn", "btn-outline-primary", "post-edit");
      editButton.setAttribute("type", "button");
      editButton.addEventListener("click", (e) => {
        window.location = `/add-post.html?id=${post.id}`
      })

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn", "btn-outline-danger", "post-delete");
      deleteButton.setAttribute("type", "button");
      deleteButton.addEventListener("click", (e) => {
        postDelete(post.id);
      })
      
      secure.append(editButton, deleteButton)
      posts.append(secure);
    
    }
  });
});