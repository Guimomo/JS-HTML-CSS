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

const ciudades = async () => {
    try {
        const data = await fetch('data.json');
        const ciudades = await data.json();
        console.log(ciudades);

        // const cityLabel = document.createElement('label');
        // cityLabel.textContent = 'Seleccione una ciudad:';
        // formulario.appendChild(cityLabel);

        const cityCombo = document.createElement('select');
        cityCombo.textContent = 'Seleccione una ciudad';
        cityCombo.id = 'citySelect';

        const defecto = document.createElement('option');
        defecto.textContent = 'Seleccione una ciudad';
        cityCombo.append(defecto);

        const opciones = document.createDocumentFragment();
        
        ciudades.forEach(city => {
            const opcion = document.createElement('option');
            opcion.value = city.nombre;
            opcion.textContent = city.nombre;

            const clon = document.importNode(opcion, true);
            opciones.append(clon);
        });

        cityCombo.append(opciones);

        // const defaultOption = document.createElement('option');
        // defaultOption.textContent = 'Seleccione una ciudad';
        // defaultOption.value = '';  // Valor vacío
        // defaultOption.disabled = true; // No se puede seleccionar
        // defaultOption.selected = true; // Se muestra por defecto

        
        // formulario.appendChild(cityCombo);
        
        // apellido.insertAdjacentElement('afterend', cityCombo);
        // apellido.insertAdjacentElement('afterend', cityLabel);

        formulario.insertAdjacentElement('afterbegin', cityCombo);

    } catch (error) {
        console.error('Error:', error);
    }
};

ciudades();

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

//-------------------------------------------------------------------GENERO

const generoContent = document.createElement('div');
generoContent.classList.add('LPOptions');

const generoLabel = document.createElement('label');
generoLabel.textContent = 'Selecciona un género:';
generoLabel.classList.add('optionsLbl'); 

generoContent.appendChild(generoLabel);

const generos = async () => {

    try {

        const data = await fetch('generos.json');
        const generos = await data.json();
        console.log(generos);
        
        const opciones = document.createDocumentFragment();
    
        generos.forEach(genero => {
            
            const generoRadio = document.createElement('input');
            generoRadio.type = 'radio';
            generoRadio.id = genero.tipo;
            generoRadio.name = 'genero';
            generoRadio.value = genero.tipo;
        
            const label = document.createElement('label');
            label.setAttribute('for', genero.tipo);
            label.textContent = genero.tipo;
        
            const opcion = document.createElement('div');
            // opcion.className = 'genderOp';
            opcion.classList.add('genderOp');
            
            // Agregar radio y label correctamente
            // opcion.appendChild(generoRadio);
            // opcion.appendChild(label);
            opcion.append(generoRadio, label);
        
            opciones.appendChild(opcion);
        });
    
        generoContent.appendChild(opciones);
    
        formulario.append(generoContent);

        apellido.insertAdjacentElement('afterend', generoContent);


    } catch (error) {
        console.error('Error al cargar los géneros:', error);
    }

}

generos();

//-------------------------------------------------------------------LENGUAJES DE PROGRAMCIÓN

const LPContent = document.createElement('div');
LPContent.classList.add('LPOptions');

const LPLabel = document.createElement('label');
LPLabel.textContent = 'Selecciona los lenguajes de programación de tu interes:';
LPLabel.classList.add('optionsLbl'); 

LPContent.appendChild(LPLabel);

const Lenguajes = async () => {
    
    try {

        const data = await fetch('lenguajesProgramacion.json');
        const lenguajes = await data.json();
        console.log(lenguajes);

        const opciones = document.createDocumentFragment();

        lenguajes.forEach(LP => {
            
            const LPCheck = document.createElement('input');
            LPCheck.type = 'checkbox';
            LPCheck.id = LP.lenguaje;
            LPCheck.name = 'lenguaje';
            LPCheck.value = LP.lenguaje;
        
            const label = document.createElement('label');
            label.setAttribute('for', LP.lenguaje);
            label.textContent = LP.lenguaje;
        
            const opcion = document.createElement('div');
            // opcion.className = 'genderOp';
            opcion.classList.add('LPOption');
            
            // Agregar radio y label correctamente
            // opcion.appendChild(generoRadio);
            // opcion.appendChild(label);
            opcion.append(LPCheck, label);
        
            opciones.appendChild(opcion);
        });

        LPContent.appendChild(opciones);
    
        formulario.append(LPContent);

        contrasena.insertAdjacentElement('afterend', LPContent);
        
    } catch (error) {
        console.error('Error al cargar los lenguajes de programación:', error);
    }
}

Lenguajes();

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