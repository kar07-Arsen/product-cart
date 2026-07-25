
/* 
    Реализовать абстрактный класс Drink (абстрактный он, потому что не должен иметь экземпляров. Он используется только для наследования). 
    От него мы будем создавать наследников - лимонад, чай, кофе и прочие напитки, которые посчитаете нужным. Их должно быть от 3 до 5.

    Наш абстрактный класс должен содержать общие свойства, связанные со всеми напитками (это то, что есть у каждого напитка), а это: 
    1) название
    2) размер
    3) цена
    4) температура (приватный). Почему? Потому что мы не можем влиять на температуру вне класса.

    Также наш класс должен содержать общие методы, такие как:
    1) получить информацию про напиток
    2) получить температуру напитка
    3) установить температуру напитка
    4) приготовить напиток (приватный)
    5) подать напиток
*/

class Drink {

    #temperature;

    constructor(name, sizeCup, price, temperature) {
        this.name = name;
        this.sizeCup = sizeCup;
        this.price = price;
        this.#temperature = temperature;
    }
        getInfo() {
            return {
                name: this.name,
                sizeCup: this.sizeCup,
                price: this.price,
                temperature: this.#temperature
            };
        }

        getTemperature() {
            return {
                 temperature:this.#temperature
            } 
        }

        setTemperature(temperature) {
            return this.#temperature = temperature;
        }

        #makeDrink() {
           return `Ваш заказ принят! Ожидайте!`;
        }

        giveDrink() {
            return this.#makeDrink()
        }
}

/*  
    После уже реализовываем наследников, например для кофе нам нужны дополнительные
    параметры, помимо тех 4, что названы выше. Это вид зёрен, вид молока и прочее. 
*/

class Coffee extends Drink {
    constructor(name, sizeCup, price, temperature, grains, milk) {
        super(name, sizeCup, price, temperature);
        this.grains = grains;
        this.milk = milk;
    }

    getInfo() {
        const parentInfo = super.getInfo();

        return {
            ...parentInfo,
            grains: this.grains,
            milk: this.milk
        }
    }
}

class Tea extends Drink {
    constructor(name, sizeCup, price, temperature, type) {
        super(name, sizeCup, price, temperature);
        this.type = type;
    }

    getInfo() {
        const parentInfo = super.getInfo();

        return {
            ...parentInfo,
            type: this.type
        }
    }
    
}

/* 
    После того, как реализовали класс "напиток" и его наследников, приступаем к классу "Кафе". 
    Он у нас будет принимать 2 параметра, например название кафе и его месторасположение. Реализуем 2 метода внутри него:
    1) получить информацию про кафе
    2) заказать напиток 

    При заказе напитка мы будем передавать аргументом сам напиток и вызывать его внутренние методы,
    например - подать напиток, А этот метод внутри себя вызывает метод для готовки напитка 
    и выполняет всякие побочные действия, по типу изменения температуры и прочее.
*/

class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getInfo() {
        return `Название кафе ${this.name}, находится по адресу ${this.location}`;
    }

    orderDrink(drink) {
        return console.log(drink.giveDrink())
    }

}

const coffee = new Coffee('Американо', 'Большой', 200, 30, 'Мелкие', 'Домашнее');
const tea = new Tea('Ричард', 'Средний', 150, 30, 'Зеленый');

const cafe = new Cafe('Караван', 'Верхняя Балкария');

//Что итоговое должно получиться:

//1. Можем получить информацию про кафе

console.log(cafe.getInfo());

//2. Можем заказать напиток

cafe.orderDrink(coffee);
cafe.orderDrink(tea);

//3. Можем получить информацию про напиток

console.log(coffee.getInfo());
console.log(tea.getInfo());