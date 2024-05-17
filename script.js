$(document).ready(function() {
    $('#formulario').submit(function(event) {
        
        event.preventDefault();

        //variables
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var contact = $('#contact').val();
        var adress = $('#adress').val();

        //validaciones
        var errors = [];

        if (name.trim() === '') {
            errors.push('Por favor, introduce tu nombre.');
        }

        if (email.trim().length < 3) {
            errors.push('El correo electrónico debe tener al menos 3 caracteres.');
        }

        if (password.trim().length < 10) {
            errors.push('La contraseña debe tener al menos 10 caracteres.');
        }

        if (contact.trim().length != 8) {
            errors.push('Ingrese un número telefonico valido (deben ser 8 digitos)');
        }

        if (adress.trim() === '') {
            errors.push('Por favor, introduce tu dirección.');
        }

        //error y enviar
        if (errors.length > 0) {
            var errorMessage = errors.join('<br>');
            $('#error-message').html(errorMessage);
        } else {
            
            $('#formulario')[0].submit();
        }
    });
});
