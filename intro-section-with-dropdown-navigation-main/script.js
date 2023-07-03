const togg = document.querySelector('.hamburger-menu  input')
const nav = document.querySelector('nav ul')
const drop = document.querySelector('.menu-toggle input')
const ovr = document.querySelector(".overlay")
const dropContent = document.querySelectorAll(".dropdown-content")

console.log(dropContent.length)

togg.addEventListener('click', function(){
    nav.classList.toggle('slide')
    ovr.classList.toggle('on')
})


