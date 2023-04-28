const burger_manu = document.getElementById("burger");
const close = document.getElementById("close");
const nav = document.querySelector(".nav-links");
let x = window.matchMedia("()");

let size =  window.matchMedia( "(min-width: 1000px)");


function media (size){
  if(size.match){
burger_manu.style.display="none";
close.style.display = "none";

  }

}


const opennavmenu = () => {
  nav.classList.add("nav-active");
  close.style.display = "block";
  burger_manu.style.display = "none";
  
};

const closenav = () => {
  nav.classList.remove("nav-active");
  burger_manu.style.display = "block";
  close.style.display = "none";
 
};
 
burger_manu.addEventListener("click", opennavmenu);

close.addEventListener("click", closenav);
window.onresize= media(size);