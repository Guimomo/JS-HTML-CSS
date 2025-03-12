import Swal from '../node_modules/sweetalert2/dist/sweetalert2.esm.all.js'

export const validar = (event) => {

    // Swal.fire({
    //     title: 'Error!',
    //     text: 'Do you want to continue',
    //     icon: 'error',
    //     confirmButtonText: 'Cool'
    // })

    const abcRegex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;
    const numRegex = /^\d+$/;
    const usuarioRegex = /^[A-Za-z0-9_.]+$/; // Alfanumérico, guión bajo y punto
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //detenemos el evento
    event.preventDefault();

    const campoInvalido = (campo, mensaje) =>{

        // campo.setCustomValidity(mensaje);
        // campo.reportValidity();
        //alert(mensaje);
        campo.classList.add('invalid');

        Swal.fire({
            title: 'Error!',
            text: mensaje,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }

    const limpiarCampoInvalido = () =>{
        // document.querySelectorAll('.invalid').forEach(eliminarError => eliminarError.classList.remove('invalid'))
        document.querySelectorAll('.invalid').forEach(eliminarError =>{
            eliminarError.classList.remove('invalid');
            //eliminarError.setCustomValidity('');
        });
    }

    limpiarCampoInvalido();

    //const ciudadSeleccionada = document.getElementById("citySelect").value;

    const ciudadSeleccionada = document.querySelector('.select').value;
    
    // Verificar el número de lenguajes seleccionados
    const lenguajesSeleccionados = document.querySelectorAll('input[name="lenguaje"]:checked');

    //const generoSeleccionado = document.querySelector('input[name="genero"]:checked');

    const generosSeleccionados = document.querySelectorAll('input[name="genero"]:checked');

    //validamos los datos
    if (nombre.value == '') {
        
        campoInvalido (nombre, '> El nombre es obligatorio.');
        // alert('¡El nombre es obligatorio!');
        nombre.focus();

    } else if (!abcRegex.test(nombre.value)) {
         // Verificar si el nombre solo contiene letras y espacios
        campoInvalido (nombre, '> El nombre solo debe contener letras y espacios.');
        // alert('¡El nombre solo debe contener letras y espacios!');
        nombre.focus();

    } else if (apellido.value == "" ) {
        
        campoInvalido (apellido, '> El apellido es obligatorio.');
        // alert('¡El apellido es obligatorio!');
        apellido.focus();

    } else if (!abcRegex.test(apellido.value)) {
        // Verificar si el nombre solo contiene letras y espacios
       campoInvalido (apellido, '> El apellido solo debe contener letras y espacios.');
       //alert('¡El apellido solo debe contener letras y espacios!');
        nombre.focus();

    } else if (correo.value === '') {
        campoInvalido(correo, '> Ingrese una dirección de correo.');

    } else if (!emailRegex.test(correo.value)) {
        campoInvalido(correo, '> Ingrese una dirección de correo.');

    } else if (telefono.value == "") {

        campoInvalido (telefono, '> El telefono es obligatorio.');
        // alert('¡El telefono es obligatorio!');
        telefono.focus();

    } else if (!numRegex.test(telefono.value)) {

        campoInvalido (telefono, '> El teléfono debe contener solo números.');
        // alert("¡El teléfono debe contener solo números!");
        telefono.focus();

    } else if (documento.value == '') {

        campoInvalido(documento, '> El documento es obligatorio.');
        // alert('¡El documento es obligatorio!');
        documento.focus();

    } else if (!numRegex.test(documento.value)) {
         // Verificar si el documento solo contiene números
        campoInvalido(documento, '> El documento debe contener solo números.');
        // alert('¡El documento debe contener solo números!');
        documento.focus();

    } else if (usuario.value == '') {

        campoInvalido(usuario, '> El usuario es obligatorio.');
        // alert('¡El usuario es obligatorio!');
        usuario.focus();

    } else if (!usuarioRegex.test(usuario.value)) {
         // Verificar si el usuario solo contiene letras, números o guiones bajos
        campoInvalido(usuario, '> El usuario solo debe contener letras, números o guiones bajos.');
        // alert('¡El usuario solo debe contener letras, números o guiones bajos!');
        usuario.focus();

    } else if (contrasena.value == '') {

        campoInvalido(contrasena, '> La contraseña es obligatoria.');
        // alert('¡La contraseña es obligatoria!');
        contrasena.focus();

    } else if (ciudadSeleccionada === '') {  // Validación correcta
        campoInvalido(document.querySelector('.select'), '> Seleccione una ciudad.');
        
    } else if (lenguajesSeleccionados.length < 2) {
        // Nueva validación: verificar que haya al menos 2 lenguajes seleccionados
        alert('> Debe seleccionar al menos 2 lenguajes de programación.');
        
    } else if (ciudadSeleccionada === '') {  // Validación correcta
        alert('> Seleccione una ciudad.');
        
    } else if (generosSeleccionados.length === 0) {
        // Verificar que se haya seleccionado al menos un género
        alert('> Debe seleccionar un género.');

    } else {
        // Si todos los campos son válidos
        alert('> Formulario validado correctamente.');
        // Aquí puedes enviar el formulario si es necesario
        formulario.submit();
    }
}