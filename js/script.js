var togle =document.querySelector(".navbar-toggler");
var icon =document.querySelector(".navbar-toggler svg");
var close =`<h1>Solom</h1>`;
togle.addEventListener("click" , function(){
    icon.classList.toggle("fa-x");
});