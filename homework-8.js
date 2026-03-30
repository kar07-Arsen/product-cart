import { productCards } from "./product-cards.js"

const productTemplate = document.querySelector("#product-template");

const productCardList = document.querySelector(".product-card-list");

const showProductCards = (productsArray) => {
  productsArray.forEach(product => {
  const cloneTemplateProduct = productTemplate.content.cloneNode(true);

  cloneTemplateProduct.querySelector(".product-image").setAttribute('src', `./images/${product.image}.png`)
  cloneTemplateProduct.querySelector(".product-category").textContent = product.category;
  cloneTemplateProduct.querySelector(".product-name").textContent = product.name;
  cloneTemplateProduct.querySelector(".product-description").textContent = product.description;

  const ul = cloneTemplateProduct.querySelector('.product-compound');

  product.compound.forEach(elem => {
  const li = document.createElement('li');
  li.textContent = `${elem}`;
  ul.appendChild(li);
  });

  cloneTemplateProduct.querySelector(".product-price").textContent = `${product.price} ${product.currency}`;
  //cloneTemplateProduct.querySelector(".product-currency").textContent = product.currency;

  productCardList.appendChild(cloneTemplateProduct);
  })
}

// [Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание]

const productKeyValue = productCards.reduce((acc, product) => {
  acc.push({[product.productName]: product.Description});
  return acc;
}, []);

/* Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) 
   Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. 
   Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции,
   одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)
*/

const numberOfCards = () => {
  const cardQuantity =+ prompt("Сколько карточек отобразить? 1 - 5");

  if(cardQuantity === null || cardQuantity === "")
    return 0;

  if(cardQuantity < 1 || cardQuantity > 5) {
    return alert('Вы ввели неверное значение! 1 - 5');
  }

  return cardQuantity;
};

  const selectedProducts = productCards.slice(0, numberOfCards());
  showProductCards(selectedProducts);
