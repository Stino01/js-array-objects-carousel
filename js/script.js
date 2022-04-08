//1. creare un array di oggetti (manualmente)
//2. aggiornare il codice con i nuovi valori
//3. aggiungere allo slider una timing function per far partire lo slider in automatico (con un bottone per fermarlo)
//4. refactoring
//Bonus aggiungere un effetto al cambio dell'immagine

const item = [
  {
    image: 'img/01.jpg',
    title: 'Svezia',
    text: 'Lorem ipsum'
  },
  {
    image: 'img/02.jpg',
    title: 'Svizzera',
    text: 'Lorem ipsum'
  },
  {
    image: 'img/03.jpg',
    title: 'Gran Bretagna',
    text: 'Lorem ipsum'
  },
  {
    image: 'img/04.jpg',
    title: 'Germania',
    text: 'Lorem ipsum'
  },
  {
    image: 'img/05.jpg',
    title: 'Paradise',
    text: 'Lorem ipsum'
  },
]

//variabile per raccogliere tutto l'html che va in items-container
let itemTemplate = "";

//variabile per raccogliere tutto l'html che va in thumbs-container
let thumbTemplate = "";

// preparo una varibile con l'indice dell'elemento attivo e la pongo inizialmente a 0 ovvero il primo elemento dell'array
let currentIndexActive = 0;

//eseguo il ciclo for sull'array delle immagini (items) e popolo l'html delle due varibaili da stampare nei due contenitori (immagini e thumbnails)
for (let i = 0; i < item.length; i++) {
  let classActive = "";
  if (i === currentIndexActive) {
    classActive = "active";
  }
  itemTemplate += `
  <div class="item ${classActive}">
    <img src="${item[i].image}" />
      <div class="title">
        <h2>${item[i].title}</h2>
        <p>${item[i].text}</p>
      </div>
  </div>`;
  thumbTemplate += `
  <div class="thumb ${classActive}">
    <img src="${item[i].image}" alt="" />
  </div>`;
}
//console.log(thumbTemplate);

// metto in due variabili rispettivamente i contenitori che si trovano nell'html
const itemsContainer = document.querySelector(".items-container");
const thumbsContainer = document.querySelector(".thumbs-container");
//console.log(itemContainer);

//stampo l'html corrispondente nei due contenitori
itemsContainer.innerHTML = itemTemplate;
thumbsContainer.innerHTML += thumbTemplate;
//document.querySelector(".item").classList.add("active");

//Pulsanti
//.next .fa-circle-chevron-down
//.prev .fa-circle-chevron-up
//metto nelle variabili next e prev i due pulsanti
const next = document.querySelector(" .fa-circle-chevron-down");
const prev = document.querySelector(" .fa-circle-chevron-up");
//console.log(next, prev);
function slideDown() {
  //prendere immagine con currentIndexActive e togliere classe active
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");
  //console.log(imgs);
  if (currentIndexActive === 4) {
    currentIndexActive = 0;
  } else {
    currentIndexActive++;
  }
  //console.log(currentIndexActive);
  imgs[currentIndexActive].classList.add("active");
  //console.log(currentIndexActive);
  thumbs[currentIndexActive].classList.add("active");
}
function slideUp() {
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");
  //console.log(imgs);
  if (currentIndexActive === 0) {
    currentIndexActive = item.length - 1;
  } else {
    currentIndexActive--;
  }
  //console.log(currentIndexActive);
  imgs[currentIndexActive].classList.add("active");
  //console.log(currentIndexActive);
  thumbs[currentIndexActive].classList.add("active");
}

next.addEventListener("click", slideDown);
prev.addEventListener("click", slideUp);

const timer = setInterval(slideDown, 5000)