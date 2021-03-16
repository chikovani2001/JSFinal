import fetch from "./http.js";

// ქუერი პარამეტრის აღება
const params = new URLSearchParams(window.location.search)

const id = params.get("id");
const header = document.querySelector(".post-heading");
const masthead = document.querySelector(".masthead");
const post = document.querySelector("#post");

fetch("GET", `/posts/${id}`).then((res) => {
  document.title = res.title;
  masthead.style.backgroundImage = `url(${res.image})`;
  post.innerHTML = res.content;
  header.children[0].textContent = res.title;
  header.children[1].textContent = res.description;
  const meta = header.children[2];
  meta.children[0].textContent = res.author;
  meta.children[0].nextSibling.textContent = ` on ${res.createDate}`;
});

export const postDelete = async (id) => {
  const post = await fetch("GET", `/posts/${id}`);
  if(post){
    await fetch("DELETE", `/posts/${post.id}`);
  }
}