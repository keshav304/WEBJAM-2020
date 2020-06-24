burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist= document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})