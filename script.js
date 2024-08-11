let openNavBar =document.querySelector(".fa-bars");
let closeNavBar = document.querySelector(".fa-circle-xmark")
let navBar =document.querySelector(".nav-bar");
 console.log(openNavBar);
 


openNavBar.addEventListener("click",function(){
navBar.classList.toggle("main-nav")
})



closeNavBar.addEventListener("click",function(){
    navBar.classList.remove("main-nav")
    })