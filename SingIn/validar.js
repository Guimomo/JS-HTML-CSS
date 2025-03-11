export const validar = (event) => {

    const abcRegex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;
    const numRegex = /^\d+$/;
    const usuarioRegex = /^[A-Za-z0-9_.]+$/; // Alfanumérico, guión bajo y punto
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //detenemos el evento
    event.preventDefault();

    const ciudadSeleccionada = document.getElementById("citySelect").value;
    
    // Verificar el número de lenguajes seleccionados
    const lenguajesSeleccionados = document.querySelectorAll('input[name="lenguaje"]:checked');

    //const generoSeleccionado = document.querySelector('input[name="genero"]:checked');

    const generosSeleccionados = document.querySelectorAll('input[name="genero"]:checked');

    //validamos los datos
    if (nombre.value == '') {
        
        alert('¡El nombre es obligatorio!');
        nombre.focus();

    } else if (!abcRegex.test(nombre.value)) {
         // Verificar si el nombre solo contiene letras y espacios
        alert('¡El nombre solo debe contener letras y espacios!');
        nombre.focus();

    } else if (apellido.value == "" ) {
        
        alert('¡El apellido es obligatorio!');
        apellido.focus();

    } else if (!abcRegex.test(apellido.value)) {
        // Verificar si el nombre solo contiene letras y espacios
       alert('¡El apellido solo debe contener letras y espacios!');
       nombre.focus();

    } else if (telefono.value == "") {

        alert('¡El telefono es obligatorio!');
        telefono.focus();

    } else if (!numRegex.test(telefono.value)) {

        alert("¡El teléfono debe contener solo números!");
        telefono.focus();

    } else if (documento.value == '') {

        alert('¡El documento es obligatorio!');
        documento.focus();

    } else if (!numRegex.test(documento.value)) {
         // Verificar si el documento solo contiene números
        alert('¡El documento debe contener solo números!');
        documento.focus();

    } else if (usuario.value == '') {

        alert('¡El usuario es obligatorio!');
        usuario.focus();
    } else if (!usuarioRegex.test(usuario.value)) {
         // Verificar si el usuario solo contiene letras, números o guiones bajos
        alert('¡El usuario solo debe contener letras, números o guiones bajos!');
        usuario.focus();

    } else if (contrasena.value == '') {

        alert('¡La contraseña es obligatoria!');
        contrasena.focus();

    } else if (ciudadSeleccionada === '') {  // Validación correcta
        alert('¡Seleccione una ciudad!');
        
        
    } else if (lenguajesSeleccionados.length < 2) {
        // Nueva validación: verificar que haya al menos 2 lenguajes seleccionados
        alert('¡Debe seleccionar al menos 2 lenguajes de programación!');
        
    } else if (ciudadSeleccionada === '') {  // Validación correcta
        alert('¡Seleccione una ciudad!');
        
    } else if (generosSeleccionados.length === 0) {
        // Verificar que se haya seleccionado al menos un género
        alert('¡Debe seleccionar un género!');

    } else if (correo.value === '') {
        alert('¡Ingrese una dirección correo!');
        correo.focus();

    } else if (!emailRegex.test(correo.value)) {
        alert('¡Ingrese un correo electrónico válido!');
        correo.focus();

    } else {
        // Si todos los campos son válidos
        alert('¡Formulario validado correctamente!');
        // Aquí puedes enviar el formulario si es necesario
        formulario.submit();
    }
}