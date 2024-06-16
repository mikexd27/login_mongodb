document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const errorMessage = document.getElementById('error-message');

    if (params.has('error')) {
        const errorCode = params.get('error');

        switch (errorCode) {
            case '1':
                errorMessage.textContent = 'El usuario no existe.';
                break;
            case '2':
                errorMessage.textContent = 'Contraseña incorrecta.';
                break;
            case '3':
                errorMessage.textContent = 'No se pudo iniciar sesión. Intente nuevamente.';
                break;
            default:
                errorMessage.textContent = 'Error al intentar iniciar sesión.';
        }

        errorMessage.style.display = 'block';
        
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
});