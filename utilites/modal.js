const body = document.body;
const modal = document.getElementById('login');
const dialogTriggerOpen = document.getElementById('modal-button');
const dialogTriggerClose = document.getElementById('modal-close');
const overlay = document.getElementById('modal__overlay')

dialogTriggerOpen.addEventListener('click', function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body.classList.add('dialog-is-opened');
})

dialogTriggerClose.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    body.classList.remove('dialog-is-opened');
})