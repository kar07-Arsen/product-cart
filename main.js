//---------------[Константы для дальнейшего использования;цвета, ссылка]-----------------

const colorAllCards = 'rgba(0, 255, 208, 1)';
const colorFirstCard = 'rgba(225, 255, 0, 1)'
const googleUrl = 'https://google.com';

//---------------[Покраска одной карточки в другой цвет]-----------------

const allbuttonscard = document.getElementsByClassName('buttons-product-card'); // Константа которая хранит в себе все кнопки с одним стилем
const productCardFirst = document.querySelector('.card-container');

const paintbuttoncard = allbuttonscard[0];
paintbuttoncard.addEventListener('click', () => {
  productCardFirst.style.background = colorFirstCard;
});

//---------------[Покраска всех карточек в другой цвет]-----------------

const productCardsAll = document.querySelectorAll('.card-container');
const buttonpaintallcards = allbuttonscard[1];

buttonpaintallcards.addEventListener('click', () => {
  productCardsAll.forEach((card) => card.style.backgroundColor = colorAllCards);
});

//---------------[Функционал кнопки которая при нажати открывает гугл страницу]-----------------
const buttonOpenGoogle = allbuttonscard[2];
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
const buttonOutput = allbuttonscard[3];
buttonOutput.addEventListener('click', () => outputConsoleLog('Проверка'));

function outputConsoleLog(message){
  console.log(message);
  alert(message);
}

//---------------[Функционал при наведении на главный заголовок, в консоль лог выводится содержимое заголовка]-----------------

const mainHeading = document.querySelector('.product-title');

mainHeading.addEventListener('mouseover', () => {
  console.log(mainHeading.textContent);
})

//---------------[Функционал при нажати на кнопку меняется ее цвет, затем при нажатии еще раз он меняется обратно]-----------------

const buttonchangecolor = allbuttonscard[4];
buttonchangecolor.addEventListener('click', () => {
  allbuttonscard[4].classList.toggle("bg-red");
})



