function login() {

    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    const usuarioGuardado = localStorage.getItem(correo);

    if (usuarioGuardado) {

        const usuario = JSON.parse(usuarioGuardado);

        if (usuario.contrasena === contrasena) {
            alert('Inicio de sesión exitoso');

            window.location.href = '/views/pagprincipal.html';
        } else {

            mostrarError('Contraseña incorrecta');
        }
    } else {

        mostrarError('Usuario no encontrado. Por favor, regístrate.');
    }
}

