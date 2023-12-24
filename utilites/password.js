const show = document.querySelector(".input-password--eye")

show.addEventListener('click', function(){
    const password = document.querySelector(".password");
    if (password.type === 'password') {
        password.type = 'text';
    } 
    else{
        password.type = 'password';
    }
})