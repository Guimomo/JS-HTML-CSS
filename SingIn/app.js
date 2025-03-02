const input = document.querySelector(`input`);
const contrasena = document.querySelector(`input[type="password"]`);
const formulario = document.querySelector('form')
const btnValidar = document.querySelector('button')

// console.log(input);
// console.log(contrasena);
// console.log(input.type);
// console.log(input.value);
// console.log(input.placeholder);
// input.value="Guillermo";
// console.log(contrasena.value? `lleno`:`vacio`);
// contrasena.value="123456";
// contrasena.type = "text";
//contrasena.setAttribute("type", 'text')


//------------------------------------Creación de boton login

const loginBtn = document.createElement('a');
loginBtn.textContent='Login';
loginBtn.classList.add('btn');
loginBtn.setAttribute("title", "Ir a login");
loginBtn.setAttribute('disabled', '')

formulario.append(loginBtn);

//------------------------------------ Validación (alert)

const validar = (event) =>{

    event.preventDefault();

    if (contrasena.value === '123') {

        alert('Datos validos');
        formulario.submit();

    } else {
        alert('Datos no validos');
    }
}


btnValidar.addEventListener('click', validar)

// formulario.addEventListener('click', (event) => {
//     event.preventDefault();

//     alert('Validando...'); // Mostrar el alert

// });

