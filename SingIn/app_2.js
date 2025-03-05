import { generos } from './generos.js';
import { Lenguajes } from './LP.js';
import { ciudades } from './ciudades.js';

const body = document.body;
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const documento = document.querySelector('#documento');
const usuario = document.querySelector('#usuario');
const contrasena = document.querySelector('#contrasena');
const btnValidar = document.querySelector('button');
//btnValidar.disabled = true;


const abcRegex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;
const numRegex = /^\d+$/;
const usuarioRegex = /^[A-Za-z0-9_.]+$/; // Alfanumérico, guión bajo y punto

// Evento de clic derecho
const contextmenu = () => {
    alert('¡Se hizo clic derecho en el formulario!');
};

// Evento de doble clic en el body
const dblclick = () => {
    alert('¡Se hizo doble clic en el body!');
};

// Evento de mousedown en el body
const mousedown = () => {
    alert('¡Se presionó un botón del ratón sobre el body!');
};

const keydown = (event) => {
    //alert(`¡precionaste la tecla "${event.key}"!`)
    console.log(`Tecla: "${event.key}"`);
}

//btnValidar.removeEventListener('click', validar);
//formulario.addEventListener("contextmenu", contextmenu);
//body. addEventListener("contextmenu", contextmenu);
//body. addEventListener('dblclick', dblclick)
//body. addEventListener('mousedown', mousedown)
nombre. addEventListener("keydown", keydown)

//creación de terminos y condiciones

//-------------------------------------------------------------------CIUDAD

ciudades();

//-------------------------------------------------------------------GENERO

generos(formulario);

//-------------------------------------------------------------------LENGUAJES DE PROGRAMCIÓN

Lenguajes(formulario);


//----------------------------------------------------------TERMINOS Y CONDICIONES

const terminosContent = document.createElement('div');
terminosContent.className = 'Terms';

const checkTerminos = document.createElement('input');
checkTerminos.type = 'checkbox';

const textTerminos = document.createElement('label');
textTerminos.textContent = 'Acepto los terminos y condiciones del sistema';

//btnValidar.disabled = checkTerminos.checked ? false : true;
if (!checkTerminos.checked) {
    
    btnValidar.setAttribute("disabled", "")
}


checkTerminos.addEventListener("change" , () => {
    //btnValidar.disabled = !checkTerminos.checked;
    // if (checkTerminos.checked) {
    //     btnValidar.disabled = false; 
    
    // } else {
    //     btnValidar.disabled = true; 
    // }

    (checkTerminos.checked)? btnValidar.removeAttribute("disabled") : btnValidar.setAttribute("disabled","") ;
});


terminosContent.append(checkTerminos, textTerminos);

formulario.append(terminosContent);

contrasena.insertAdjacentElement('afterend', terminosContent);



//-------------------------------------------------------------------VALIDACIÓN
const validar = (event) => {

    //detenemos el evento
    event.preventDefault();

    const ciudadSeleccionada = document.getElementById("citySelect").value;

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
        
        
    } else {
        // Si todos los campos son válidos
        alert('¡Formulario validado correctamente!');
        // Aquí puedes enviar el formulario si es necesario
        formulario.submit();
    }
}

//btnValidar.addEventListener('click', validar);
formulario. addEventListener("submit", validar)