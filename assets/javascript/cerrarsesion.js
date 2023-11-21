function logout() {
    // Borrar la información de inicio de sesión almacenada en localStorage
    localStorage.removeItem("usuario");
  
    // Redirigir a la página de inicio de sesión u otra página de tu elección
    window.location.href = "/views/iniciodesesion.html";
  }