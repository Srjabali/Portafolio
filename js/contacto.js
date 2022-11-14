const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault()
    alert("wena loco")

}

const burgerBtn = document.querySelector('#burger_btn');
const exeBtn= document.querySelector('#exe_btn');
const header = document.querySelector('.header');
const body = document.querySelector('#body');
const nav = document.querySelector("#nav")

const allButton = addEventListener('click', () =>{
    body.classList.toggle("aparece-body")
    header.classList.toggle("aparece-header");
    exeBtn.classList.toggle("aparece-exe")
    burgerBtn.classList.toggle("aparece-burger")
    
});

burgerBtn.allButton;
exeBtn.allButton;
nav.allButton;