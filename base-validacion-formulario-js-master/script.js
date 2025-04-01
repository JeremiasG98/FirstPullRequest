document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    //validar campo nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if (entradaNombre.value.trim() === ''){
        errorNombre.textContent='Por favor, introducí tu nombre';
        errorNombre.classList.add('error-message');
    }else{
        errorNombre.textContent='';
        errorNombre.classList.remove('error-message');
    }
    //validar correo electronico
    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent='Por favor, introduci un email valido'
        emailEntrada.classList.add('error-message');
    }else{
        emailError.textContent='';
        emailError.classList.remove('error-message');
    }
    //Validar contraseña
    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');
    if(contrasenaEntrada.value.length < 8){
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres';
        contrasenaError.classList.add('error-message');
    }else{
        emailError.textContent='';
        contrasenaError.classList.remove('error-message');
    }
    //Si todos los campos son validos enviar formulario
    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){
        alert('El formulario se ha enviado con éxito');
        document.getElementById('formulario').reset();
    }

});