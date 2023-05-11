const title = document.querySelector(".title");
const heading = document.getElementById("text-head");
const logo = document.getElementById("logo-head");

title.addEventListener("mouseenter", () => {
  heading.setAttribute("class", "show-logo");
  console.log("Working");
});

//title.addEventListener("mouseleave", () => {
title.innerHTML = "K";
//});
