$(document).ready(function() {
    $('#mobile_btn').on('click', function (){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    let isValid = true;
    const fields = ['nome', 'data', 'opcao', 'mensagem', 'email'];

    fields.forEach(id => {
        const field = document.getElementById(id);
        if (!field.value) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    const radios = document.querySelectorAll('input[name="genero"]');
    if (![...radios].some(r => r.checked)) {
        isValid = false;
    }

    const checkboxes = document.querySelectorAll('input[name="interesse"]');
    if (![...checkboxes].some(c => c.checked)) {
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
        alert("Por favor, preencha todos os campos obrigatórios!");
    }
});