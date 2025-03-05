export const generos = async () => {

    const generoContent = document.createElement('div');
    generoContent.classList.add('LPOptions');

    const generoLabel = document.createElement('label');
    generoLabel.textContent = 'Selecciona un género:';
    generoLabel.classList.add('optionsLbl'); 

    generoContent.appendChild(generoLabel);
    
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