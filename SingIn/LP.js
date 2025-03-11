export const Lenguajes = async () => {

    const LPContent = document.createElement('div');
    LPContent.classList.add('LPOptions');

    const LPLabel = document.createElement('label');
    LPLabel.textContent = 'Selecciona los lenguajes de programación de tu interes:';
    LPLabel.classList.add('optionsLbl'); 

LPContent.appendChild(LPLabel);

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
            //LPCheck.classList.add('lenguaje-checkbox');// se crea una clase para identificarlo de forma sencilla
        
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
