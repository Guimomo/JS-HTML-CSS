export const ciudades = async () => {
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
        cityCombo.name = 'ciudad_id';
        cityCombo.classList.add('select');

        const defecto = document.createElement('option');
        defecto.textContent = 'Seleccione una ciudad';
        defecto.value = ''; 
        cityCombo.append(defecto);

        const opciones = document.createDocumentFragment();
        
        ciudades.forEach(city => {
            const opcion = document.createElement('option');
            opcion.value = city.id;
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
