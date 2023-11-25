function login() {
    event.preventDefault();
    const email = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    // Verificar si el usuario existe en el localStorage
    const usuarioGuardado = localStorage.getItem(email);

    if (usuarioGuardado) {
        // Si el usuario existe, obtener los datos almacenados
        const usuario = JSON.parse(usuarioGuardado);

        // Verificar si la contraseña coincide
        if (usuario.contrasena === contrasena) {
            alert('Inicio de sesión exitoso');
            window.location.href = '../views/pagprincipal.html';
        } else {
            // Contraseña incorrecta
            mostrarError('Contraseña incorrecta');
            resetearBotonDespuesDeError();
        }
    } else {
        // Usuario no encontrado
        mostrarError('Usuario no encontrado. Por favor, regístrate.');
        resetearBotonDespuesDeError();
    }
}

function mostrarError(mensaje) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = mensaje;
    resetearBotonDespuesDeError(); // También restablecer el botón aquí en caso de que haya un mensaje previo.
}

function resetearBotonDespuesDeError() {
    // Después de 2 segundos, borra el mensaje de error y restablece el botón
    setTimeout(() => {
        const errorDiv = document.getElementById('error-message');
        errorDiv.textContent = '';

        // Restablecer el estado del botón si es necesario
        const boton = document.getElementById('error-message'); // Reemplaza 'tu-boton-id' con el ID de tu botón
        boton.removeAttribute('disabled'); // Si el botón tiene un atributo 'disabled', restablecerlo
    }, 2000);
}

function back() {
    window.location.href = '../index.html';
}
