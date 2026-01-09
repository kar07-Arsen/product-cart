// [Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна,
// город, статус отношений и так далее. Чем больше - тем лучше 
// (но не увлекайтесь, до 10 максимум). Подберите правильное название для переменной.]

const userInfo = {
  name: 'Arsen',
  surname: 'Kartlykov',
  email: 'kartlykov.arsen@mail.ru',
  job: 'unEmployed',
  jobtitle: 'none',
  age: 20,
  coutry: 'Russian',
  city: 'Nalchik',
  marialstatus: 'notMarried'
};

// Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки).
// Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3. 
// Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта)

const carInfo = {
  brand: 'BMW',
  model: 'm5F90',
  year: 2023,
  color: 'black',
  gearbox: '8thStage'
};

carInfo.owner = userInfo;

// Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. 
// Она проверяет, есть ли в объекте свойство "максимальная скорость",
// если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)

function isKeyInObject(object){
    if(object.hasOwnProperty('maxspeed')){
      return;
    }
    else {
      object.maxspeed = 60;
    }
};

console.log(isKeyInObject(carInfo));


//6. Написать функцию, которая получает первым аргументом  
// — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function getObjectValues(object, keyobj){
    return object[keyobj];
};

console.log(getObjectValues(carInfo, 'brand'));


// 8. Создать массив, состоящий из объектов, где объект представляет 
// собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). 
// После, используя известный нам метод массив, добавить еще одну книгу в конец списка. 
// Можете заменить книги на фильмы, или другую сущность, идею вы поняли.


const arrayBooks = [

   bookAlgebra = {
    name: "Алгебра",
    author: "Киселев А.П",
    yearofissiue: "2022",
    covercolor: "Белый",
    genre: "Неизвестен"
  },

  bookJavascript = {
    name: "JavaScript",
    author: "Дэвид Флэнаган",
    yearofissiue: "1996",
    covercolor: "Белый",
    genre: "Справочник"
  },

  bookHtml = {
    name: "HTML & CSS: Design and Build Web Sites",
    author: "Джон Дакет",
    yearofissiue: "2011",
    covercolor: "Темно-синий",
    genre: "Справочник"
  }
];

arrayBooks.push(bookTypescript = {
    name: "Профессиональный TypeScript. ",
    author: "Борис черный",
    yearofissiue: "2023",
    covercolor: "Белый",
    genre: "Справочник"
  })

console.log(arrayBooks);

//Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной
//(Гарри Поттер, Марвел и так далее). (Если используете другую, свою сущность - импровизируйте).
//С помощью известного нам метода массива или оператора 
//(рекомендую использовать оператор), объединить эти два массива в один


const arrayBooksForMuslim = [

    biographyOfTheProphet = {
    name: "Ар-Рахик аль-махтум",
    author: "ar-Rakhman alʹ-Mubarakfuri Safi",
    yearofissiue: "1976",
    covercolor: "Черный",
    genre: "Жизнеописание"
  },

    сollectionOfHadiths = {
    name: "Сахих Аль Бухари",
    author: "Мухаммад аль Бухари",
    yearofissiue: "801-900",
    covercolor: "Черный",
    genre: "Сборник хадисов"
  },

    lifeOfTheCompanions = {
    name: "Рассказы из жизни сподвижников",
    author: "	Абд-ар-Рахман Рафат аль-Баша",
    yearofissiue: "2020",
    covercolor: "Зеленый",
    genre: "Рассказ"
    }
];

console.log(arrayBooksForMuslim);

const arrayMerger = [...arrayBooks, ...arrayBooksForMuslim];
console.log(arrayMerger);


//Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9. 
//Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости 
//от года выпуска книги (или какой-то логики, связанной с вашей сущностью), 
// устанавливаем true или false. Что я хочу этим сказать:
// если книга выпущена позже 2000 года, устанавливаем true 
// (да, это редкий), нет - false (значит это не редкий).


function addRareProperty(booksArray) {
  return booksArray.map(book => ({
    ...book,
    isRare: book.year > 2000
  }));
}

console.log(addRareProperty(arrayBooks));