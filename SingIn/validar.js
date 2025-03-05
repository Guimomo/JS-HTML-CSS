const dom = document;
const isValid = (event, formulario) =>{
    event.preventDefault();
    const lista = dom.querySelectorAll(formulario);
    console.log(lista[0].selectedIndex);
    
}