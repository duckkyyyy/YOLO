const button = document.getElementById('button-rec');
const dropdown = document.getElementById('dropdown');

button.addEventListener('click', function(){
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
    }
    else {
        dropdown.classList.add('hidden');
    }
})
