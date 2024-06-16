document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const errorMessage = document.getElementById('error-message');

    if (params.has('error')) {
        const errorCode = params.get('error');

        switch (errorCode) {
            case '1':
                errorMessage.textContent = 'Por favor, complete todos los campos.';
                break;
            case '2':
                errorMessage.textContent = 'Error al crear el usuario. Intente nuevamente más tarde.';
                break;
            default:
                errorMessage.textContent = 'No se pudo crear un usuario. Intente nuevamente.';
        }

        errorMessage.style.display = 'block';

        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
})