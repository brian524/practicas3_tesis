document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    // Simulación de credenciales (puedes conectar a una BD en el futuro)
    if (username === "admin" && password === "12345") {
        alert("¡Bienvenido!");
        window.location.href = "index.html";
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
});
