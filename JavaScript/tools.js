const title = document.querySelector(".title");

title.addEventListener("mouseenter", () => {
  title.innerHTML = "Keenan's Blog";
});

title.addEventListener("mouseleave", () => {
  title.innerHTML = "K";
});
