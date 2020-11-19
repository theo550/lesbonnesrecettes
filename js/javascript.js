let cards = document.querySelectorAll('.list')[0];
let arrowRight = document.querySelectorAll('.arrow')[0];
let arrowLeft = document.querySelectorAll('.arrow')[1];

arrowLeft.addEventListener('click', changeOrder);
arrowRight.addEventListener('click', reChangeOrder);




function changeOrder() {
  let i = 0
  if (i < 3) {
    let firstCard = document.querySelectorAll('.card')[i];
    let middleCard = document.querySelectorAll('.card')[i + 1];
    let lastCard = document.querySelectorAll('.card')[2 - i];
    i ++;
    console.log(firstCard)
    console.log(middleCard)
    console.log(lastCard)
    cards.insertBefore(lastCard, firstCard);
    firstCard.classList.remove('disable');
    lastCard.classList.add('disable');
    middleCard.classList.add('disable');
  } else {
    i = 0;
  }
}

function reChangeOrder() {
  let i = 0
  if (i < 3) {
    let firstCard = document.querySelectorAll('.card')[i];
    let middleCard = document.querySelectorAll('.card')[i + 1];
    let lastCard = document.querySelectorAll('.card')[i + 2];
    i ++;
    console.log(firstCard)
    console.log(middleCard)
    console.log(lastCard)
    cards.insertBefore(firstCard, lastCard.nextSibling);
    firstCard.classList.add('disable');
    lastCard.classList.remove('disable');
    middleCard.classList.add('disable');
  } else {
    i = 0;
  }
}