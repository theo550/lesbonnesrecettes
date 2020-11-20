let cards = document.querySelectorAll('.list')[0];
let arrowRight = document.querySelectorAll('.arrow')[0];
let arrowLeft = document.querySelectorAll('.arrow')[1];
let countBack = 0


arrowLeft.addEventListener('click', changeOrder);
arrowRight.addEventListener('click', reChangeOrder);



// faire tourner les cartes vers la droite

function changeOrder() {
  let i = 0
  
  if (i < 3) {
    let firstCard = document.querySelectorAll('.card')[i];
    let middleCard = document.querySelectorAll('.card')[i + 1];
    let lastCard = document.querySelectorAll('.card')[2 - i];
    i ++;
    cards.insertBefore(lastCard, firstCard);
    firstCard.classList.remove('disable');
    lastCard.classList.add('disable');
    middleCard.classList.add('disable');
    

  } else {
    i = 0;
  }
  
  if (countBack === 0) {
    document.body.style.backgroundColor = "#E8006D"
    countBack ++
  } else if (countBack === 1)  {
    document.body.style.backgroundColor = "#00DDE8"
    countBack ++
  } else {
    document.body.style.backgroundColor = "#FCA009"
    countBack = 0
  }

}


// faire tourner les cartes vers la gauche

function reChangeOrder() {
  let i = 0
  if (i < 3) {
    let firstCard = document.querySelectorAll('.card')[i];
    let middleCard = document.querySelectorAll('.card')[i + 1];
    let lastCard = document.querySelectorAll('.card')[i + 2];
    i ++;
    cards.insertBefore(firstCard, lastCard.nextSibling); // insert la première carte avant ce qui suit la dernière carte (nextSibling)
    firstCard.classList.add('disable');
    lastCard.classList.remove('disable');
    middleCard.classList.add('disable');
  } else {
    i = 0;
  }

  if (countBack === 0) {
    document.body.style.backgroundColor = "#E8006D"
    countBack ++
  } else if (countBack === 1)  {
    document.body.style.backgroundColor = "#00DDE8"
    countBack ++
  } else {
    document.body.style.backgroundColor = "#FCA009"
    countBack = 0
  }
}

// Change background color




// move background images

let pineapple = document.getElementsByClassName('pineapple')[0]
let banana = document.getElementsByClassName('banana')[0]

document.onmousemove = function () {
  
let x = event.clientX * 100 / window.innerWidth
let y = event.clientY * 100 / window.innerWidth

pineapple.style.marginLeft = `${x * 0.3 + 200}px`;
pineapple.style.marginTop = `${y * 0.4}px`;

banana.style.marginLeft = `${x * 0.9 + 700}px`;
banana.style.marginTop = `${y * 0.7 + 100}px`;

}