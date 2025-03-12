import { generos } from './generos.js';
import { Lenguajes } from './LP.js';
import { ciudades } from './ciudades.js';
import { validar } from "./validar.js";

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

// Crear el input para correo electrónico
const correo = document.createElement('input');
correo.type = 'email'; // Tipo email para validación básica del navegador
correo.id = 'correo';
correo.name = 'correo';
correo.placeholder = 'Correo electrónico';

formulario.appendChild(correo);
telefono.insertAdjacentElement('beforebegin', correo);

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

ciudades(formulario);

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

// Evitar que se ingresen letras en los campos numéricos
const soloNumeros = (event) => {
    if (!/^\d$/.test(event.key) && event.key !== "Backspace") {
        event.preventDefault();
    }
};

// Evitar que se ingresen números en los campos de texto
const soloLetras = (event) => {
    if (!/^[A-Za-záéíóúÁÉÍÓÚ\s]$/.test(event.key) && event.key !== "Backspace") {
        event.preventDefault();
    }
};

// Aplicar restricciones a los campos específicos
document.querySelector("#telefono").addEventListener("keydown", soloNumeros);
document.querySelector("#documento").addEventListener("keydown", soloNumeros);
document.querySelector("#nombre").addEventListener("keydown", soloLetras);
document.querySelector("#apellido").addEventListener("keydown", soloLetras);

//-------------------------------------------------------------------VALIDACIÓN

//btnValidar.addEventListener('click', validar);
formulario.addEventListener("submit", validar)