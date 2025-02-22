const card =  {
    id: 1,
    name: "Titulo de la nueva card",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
};

const $cards = document.querySelector("#cards");


//---creamos los elementos de la card

const $card = document.createElement("div");
const $card_header = document.createElement("header");
const $card_h2 = document.createElement("h2");
const $card_body = document.createElement("div");
const $card_img = document.createElement("img");
const $card_paragraph = document.createElement("p");
const $button = document.createElement("a");
const $button_text = document.createElement("span");
const $button_icon = document.createElement("i");

//---relacionar con css
$card.classList.add("card");
$card_header.classList.add("card__header");
$card_h2.classList.add("card__title");
$card_body.classList.add("card__body");
$card_img.classList.add("card__img");
$card_paragraph.classList.add("card__paragraph");
$button.classList.add("button","button--outline");
$button_text.classList.add("button__text");
$button_icon.classList.add("bx", "bxs-chevron-right", "button__icon");

//---agregamos los valores del objeto a los elementos
$card_h2.textContent = card.name;
$card_paragraph.textContent = card.paragraph;
$button_text.textContent = "Saber más";

//---agregar atributos

//$card_h2.setAttribute("h2", card.name);
$card_img.setAttribute("src", card.img);
$card_img.setAttribute("alt", card.name);
$button.setAttribute("href","#");

//---agregamos los elementos hijos

$card_header.append($card_h2);
$button.append($button_text, $button_icon);
$card_body.append($card_img, $card_paragraph, $button);
$card.append($card_header, $card_body);

//

//$cards.append($card);

//$cards.insertAdjacentElement("beforebegin", $card);
$cards.insertAdjacentElement("afterbegin", $card);


const array = [...$cards.children];

array.map(item => {

    console.log(item);
    
})

// for (let i = 0; i < array.length ; i++) {
    
//     const $card = array[i]; 
//     const $button = $card.querySelector(".button"); 

//     if (i % 2 === 0) {

//         $button.classList.add("green"); // Par, botón verde

//     } else {
        
//         $button.classList.add("red");    // Impar, botón rojo
//     }    

// }

array.map((item, index, array)=>{

    if (index % 2 === 0) {

        item.querySelector('a.button').classList.toggle("green"); // Par, botón verde

    } else {
        
        item.querySelector('a.button').classList.toggle("red");    // Impar, botón rojo
    }   

})

console.clear;

// // Seleccionamos el contenedor de las tarjetas
// const container = document.getElementById('cards');

// // Obtenemos todas las tarjetas dentro del contenedor
// const cards = Array.from(container.getElementsByClassName('card'));

// // Invertimos el array de tarjetas
// const reversedCards = cards.reverse();


// // Volvemos a agregar las tarjetas al contenedor en el orden invertido
// reversedCards.forEach(card => {
//     container.appendChild(card); // Reapendemos cada tarjeta al contenedor
// });


for (let i = array.length -1 ; i >= 0; --i) {
    const element = array[i];
    
}