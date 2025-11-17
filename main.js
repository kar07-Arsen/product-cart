//---------------[Покраска одной карточки в другой цвет]-----------------

const buttonPaintCard = document.querySelector('#paint-color-first-card');
const productCardFirst = document.querySelector('.card-container');

buttonPaintCard.addEventListener('click', () => {
  productCardFirst.style.background = colorFirstCard;
});

//---------------[Константы для дальнейшего использования;цвета, ссылка]-----------------

const colorAllCards = 'rgba(0, 255, 208, 1)';
const colorFirstCard = 'rgba(225, 255, 0, 1)'
const googleUrl = 'https://google.com';

//---------------[Покраска всех карточек в другой цвет]-----------------

const buttonPaintAllCards = document.querySelector('#paint-color-all-cards');
const productCardsAll = document.querySelectorAll('.card-container');

buttonPaintAllCards.addEventListener('click', () => {
  productCardsAll.forEach((card) => card.style.backgroundColor = colorAllCards);
});

//---------------[Функционал кнопки которая при нажати открывает гугл страницу]-----------------

const buttonOpenGoogle = document.querySelector('#open-google');
buttonOpenGoogle.addEventListener('click', openGoogle);

function openGoogle(){
  const answer = confirm('Вы дейсвительно хотите перейти на страницу Google.com?');
  
  if(answer === true){
    window.open(googleUrl);
  }else {
    return;
  }
};

//---------------[Функционал кнопки которая при нажати выводит сообщение в alert, console.log]-----------------

const buttonOutputConsolelog = document.querySelector('#output-console-log');
buttonOutputConsolelog.addEventListener('click', () => outputConsoleLog('Проверка'));

function outputConsoleLog(message){
  console.log(message);
  alert(message);
}

//---------------[Функционал при наведении на главный заголовок, в консоль лог выводится содержимое заголовка]-----------------

const mainHeading = document.querySelector('.product-title');

mainHeading.addEventListener('mouseover', () => {
  console.log(mainHeading);
})

//---------------[Функционал при нажати на кнопку меняется ее цвет, затем при нажатии еще раз он меняется обратно]-----------------

const buttonChangeColor = document.querySelector('#change-color-button');
buttonChangeColor.addEventListener('click', () => {
  buttonChangeColor.classList.toggle("red-color-button");
})

