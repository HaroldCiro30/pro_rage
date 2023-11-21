function register() {

  const nombre = document.getElementById('nombres').value;
  const apellido = document.getElementById('apellidos').value;
  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;
  const sexo = document.getElementById('genero').value;

  const usuario = {
      nombre,
      apellido,
      correo,
      sexo,
      contrasena
  };

  localStorage.setItem(correo, JSON.stringify(usuario));

  alert('Usuario creado correctamente. Por favor, inicie sesión.');
  window.location.href = '/index.html';
}
