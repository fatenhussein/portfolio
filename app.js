const burger_manu = document.getElementById("burger");
const close = document.getElementById("close");
const nav = document.querySelector(".nav-links");
let x = window.matchMedia("(max-width: 768px)");
const opennavmenu = () => {
  nav.classList.add("nav-active");
  close.style.display = "block";
  burger_manu.style.display = "none";
};

const closenav = () => {
  nav.classList.remove("nav-active");
  burger_manu.style.display = "block";
  close.style.display = "none";
  setTimeout(() => {
    document.location.reload();
  }, 3000);
};

burger_manu.addEventListener("click", opennavmenu);

close.addEventListener("click", closenav);

