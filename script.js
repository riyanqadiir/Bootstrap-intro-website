const fixed_navbar = document.querySelector(".top-navbar");
const navLink  = document.querySelectorAll(".nav-link");
window.addEventListener("scroll",function(){
    if(this.scrollY > 100){
        fixed_navbar.style.background = "#000";
    }else{
        fixed_navbar.style.background = "";

    }
})