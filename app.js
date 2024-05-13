document.addEventListener('DOMContentLoaded', function() {

    const inputNombre = document.querySelector('#nombre');
    const inputApellido = document.querySelector('#apellido');
    const inputEmail = document.querySelector('#email');
    const inputGenero = document.querySelector('#genero');
    const selectMotivo = document.querySelector('#motivo');
    const inputMensaje = document.querySelector('#mensaje');
    const formularioContactanos = document.querySelector('#contactanos-formulario');

    inputNombre.addEventListener('blur', validarFormulario);
    inputApellido.addEventListener('blur', validarFormulario);
    inputEmail.addEventListener('blur', validarFormulario);
    inputGenero.addEventListener('blur', validarFormulario);
    selectMotivo.addEventListener('blur', validarFormulario);
    inputMensaje.addEventListener('blur', validarFormulario);

    function validarFormulario(e) {
        const referencia = e.target;
        const mensaje = `El campo ${referencia.id} es obligatorio`;

        if(e.target.value.trim() === '') {
            mostrarAlerta( mensaje, e.target);
        } else {
            eliminarAlerta(referencia);
        }
    }

    function mostrarAlerta(mensaje, referencia) {

        const alertaExistente = referencia.nextElementSibling;
        if (alertaExistente && alertaExistente.classList.contains('alerta')) {

        return;
    }

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('alerta');

        referencia.parentNode.insertBefore(error, referencia.nextSibling);

    }

    function eliminarAlerta(referencia) {
        const alertaExistente = referencia.nextElementSibling;
        if (alertaExistente && alertaExistente.classList.contains('alerta')) {
            // Si hay una alerta, la eliminamos
            alertaExistente.remove();
        }
    }

});


