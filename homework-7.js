import { arrayObjects } from "./comments.js";

//[HOMEWORK - 1]Создать файл "homework-7.js", подключить его в HTML. 
// Добавляем новый атрибут - type = module, что бы была возможность импорта (далее увидим зачем)

//[HOMEWORK - 2]Создать массив чисел от 1 до 10.
// Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(number => number >= 5);

console.log(filteredNumbers);

// [HOMEWORK - 3]Создать массив строк, относящихся к любой сущности 
// (название фильмов/книг, кухонные приборы, мебель и т.д.), 
// проверить, есть ли в массиве какая-то определенная сущность.

const programmingLanguages = ['Python', 'JavaScript', 'C++', 'C#', 'Rust', 'C', 'PHP'];

const hasElementInArray = programmingLanguages.includes('JavaScript');

console.log(hasElementInArray);

//[HOMEWORK-4]Написать функцию, которая аргументом будет принимать массив 
//и изменять его порядок на противоположный ("переворачивать") 
// Два вышеуказанных массива с помощью этой функции перевернуть.

const numbersUpToFive = [1, 2, 3, 4, 5];

const numbersUpToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArray = array => {
  array.reverse();
}

reverseArray(numbersUpToTen);

reverseArray(numbersUpToFive);

// [HOMEWORK-5]Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива.
// Данный массив представляет собой пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу. 
// Не забудьте удалить квадратные кавычки у ключей объектов (можно использовать Chat GPT, что бы не делать это вручную)

// [HOMEWORK-6]Сделать константу экспортируемой, добавив перед "const" ключевое слово "export". 
// Таким образом мы сможем внедрить переменную из comments.js в homework-7.js и работать с ней. 
// Когда мы введем название переменной, нам предложит импортировать ее - так и делаем.

//[HOMEWORK-7]Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"


const arrayOnlyCom = arrayObjects.filter(user => user.email.includes(".com"));

console.log(arrayOnlyCom);

// [HOMEWORK-8]Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const modifiedArray = arrayObjects.map(elem => {
  return {
    ...elem, 
    postId: elem.id <= 5 ? 2 : 1}
});

console.log(modifiedArray);

// [HOMEWORK-9Перебрать массив, что бы объекты состояли только из айди и имени

const arrayOnlyNameId = arrayObjects.map(elem => {
  return {
    id: elem.id,
    name: elem.name
  };
})

console.log(arrayOnlyNameId);

//[HOMEWORK-10] Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
//если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const arrayIsLength = arrayObjects.map(elem => {
  return {
    ...elem, 
    IsInvalid: elem.body.length >= 180 ? true : false}
})

console.log(arrayIsLength);

// [HOWEWORK-11] Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailWithReduce = arrayObjects.reduce((acc, elem) => {
  acc.push(elem.email);
  return acc;
}, [])

console.log(emailWithReduce);
//[HOMEWORK-12] Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailToString = emailWithReduce.toString();

console.log('Строка из email-ов:', emailToString);

const emailJoin = emailWithReduce.join(' ; ');

console.log(emailJoin);
