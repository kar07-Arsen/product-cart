//-------------[ДЗ-10.2]
// На основе этого создать файл main.js. Его единственного использовать
// в index.html, а все остальные js файлы импортировать в главный.

import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './modal.js';
import './form.js';
import './cafedrinks.js';

//---------------[Константы для дальнейшего использования;цвета, ссылка]----------------- 

const colorAllCards = 'rgba(0, 255, 208, 1)';
const colorFirstCard = 'rgba(225, 255, 0, 1)'
const googleUrl = 'https://google.com';

//---------------[Покраска одной карточки в другой цвет]-----------------

const productCardFirst = document.querySelector('.card-container');

const buttonPaintCard = document.querySelector('#paint-color-first-card')
buttonPaintCard.addEventListener('click', () => {
  productCardFirst.style.background = colorFirstCard;
});

//---------------[Покраска всех карточек в другой цвет]-----------------

const productCardsAll = document.querySelectorAll('.card-container');
const buttonPaintAllCards = document.querySelector('#paint-color-all-cards');

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
const buttonOutput = document.querySelector('#output-console-log');
buttonOutput.addEventListener('click', () => outputConsoleLog('Проверка'));

function outputConsoleLog(message){
  console.log(message);
  alert(message);
};

//---------------[Функционал при наведении на главный заголовок, в консоль лог выводится содержимое заголовка]-----------------

const mainHeading = document.querySelector('.product-title');

mainHeading.addEventListener('mouseover', () => {
  console.log(mainHeading.textContent);
});

//---------------[Функционал при нажати на кнопку меняется ее цвет, затем при нажатии еще раз он меняется обратно]-----------------

const buttonChangeColor = document.querySelector('#change-color-button');
buttonChangeColor.addEventListener('click', () => {
  buttonChangeColor.classList.toggle("bg-red");
});

/* [HOMEWORK-10] . Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). 
   Придумайте свою структуру и реализуйте наследуемость классов 
*/

class Developers {
  constructor(name, age, country, position, salary, experience) {
    this.name = name,
    this.age = age,
    this.country = country,
    this.position = position,
    this.salary = salary,
    this.experience = experience
  }

  showInfo() {
    console.log(`Разработчик: ${this.name}, возраст: ${this.age}, страна: ${this.country}, 
    должность: ${this.position} разработчик, зарплата: ${this.salary}, стаж: ${this.experience}`);
  }
};

const itDevelopers = new Developers('Арсен', 20, 'Россия', 'Frontend', 100000, 1);
itDevelopers.showInfo();

class CompanyEmployess extends Developers {
  constructor(name, age, country, position, salary, experience, isAnEmployee) {
    super(name, age, country, position, salary, experience);
    this.isAnEmployee = isAnEmployee;
  }
  showInfo() {
    console.log(`Разработчик: ${this.name}, возраст: ${this.age}, страна: ${this.country}, 
    должность: ${this.position} разработчик, зарплата: ${this.salary}, стаж: ${this.experience}, сотрудник:${this.isAnEmployee}`);
  }

}

const employees = new CompanyEmployess('Арсен', 20, 'Россия', 'Frontend', 100000, 1, 'True');
employees.showInfo();

