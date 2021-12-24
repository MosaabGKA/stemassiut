window.addEventListener("scroll", function(){
var nav = document.querySelector("nav");
nav.classList.toggle("sticky", window.scrollY > 0);
nav.classList.toggle("unsticky", window.scrollY > 222);
});