function register() {
  console.log('La función register se está ejecutando.');
  const nombre = document.getElementById('nombres').value;
  const apellido = document.getElementById('apellidos').value;
  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;
  const sexo = document.getElementById('genero').value;

  // Verificar si alguno de los campos está vacío
  if (nombre === '' || apellido === '' || correo === '' || contrasena === '' || sexo === '') {
    alert('Por favor, complete todos los campos.');
    return; // No registramos si hay campos vacíos
  }

  const usuario = {
    nombre,
    apellido,
    correo,
    sexo,
    contrasena
  };

  localStorage.setItem(correo, JSON.stringify(usuario));

  alert('Usuario creado correctamente. Por favor, inicie sesión.');
  window.location.href = '../index.html';
}

function back() {
  window.location.href = '../index.html';
}
