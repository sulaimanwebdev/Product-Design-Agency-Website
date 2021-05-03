let burger = document.querySelector('#burger');
let nav = document.querySelector('.nav')
burger.addEventListener('click', ()=>{
    burger.classList.toggle('fa-times')
    
    nav.classList.toggle('show')
 
})