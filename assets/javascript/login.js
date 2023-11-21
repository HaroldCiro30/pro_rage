function login() {
    const email = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    // Verificar si el usuario existe en el localStorage
    // const usuarioGuardado = localStorage.getItem(correo);
    const usuarioGuardado = localStorage.getItem(email);

    if (usuarioGuardado) {
        // Si el usuario existe, obtener los datos almacenados
        const usuario = JSON.parse(usuarioGuardado);

        // Verificar si la contraseña coincide
        if (usuario.contrasena === contrasena) {
            alert('Inicio de sesión exitoso');
            window.location.href = '/views/pagprincipal.html';
        } else {
            // Contraseña incorrecta
            mostrarError('Contraseña incorrecta');
        }
    } else {
        // Usuario no encontrado
        mostrarError('Usuario no encontrado. Por favor, regístrate.');
    }
}

function mostrarError(mensaje) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = mensaje;
}

function back() {
    window.location.href = '../index.html';
}