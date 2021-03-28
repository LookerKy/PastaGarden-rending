const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar_menu');
const social = document.querySelector('.navbar_social');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    social.classList.toggle('active')
    toggleBtn.classList.toggle('active')
})

