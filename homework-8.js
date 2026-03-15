import { productsCard } from "./productsCardArray.js"

const productTemplate = document.querySelector("#product-template");

const productCardList = document.querySelector(".product-card-list");

const showProductCards = (productsArray) => {
  productsArray.forEach(product => {
  const cloneTemplateProduct = productTemplate.content.cloneNode(true);

  cloneTemplateProduct.querySelector(".product-image").setAttribute('src', product.productImage)
  cloneTemplateProduct.querySelector(".product-category").textContent = product.productCategory;
  cloneTemplateProduct.querySelector(".product-name").textContent = product.productName;
  cloneTemplateProduct.querySelector(".product-description").textContent = product.productDescription;
  cloneTemplateProduct.querySelector(".product-compound-span").textContent = product.productCompoundSpan;

  const compoundItems = cloneTemplateProduct.querySelectorAll(".product-compound-item");
  compoundItems[0].textContent = product.productItemOne;
  compoundItems[1].textContent = product.productItemTwo;
  compoundItems[2].textContent = product.productItemThree;

  cloneTemplateProduct.querySelector(".product-price-label").textContent = product.productPriceLabel;
  cloneTemplateProduct.querySelector(".product-price").textContent = product.productPrice;

  productCardList.appendChild(cloneTemplateProduct);

  })
}

// [Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание]

const productKeyValue = productsCard.reduce((acc, product) => {
  acc.push({[product.productName]: product.Description});
  return acc;
}, []);

/* Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) 
   Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. 
   Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции,
   одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)
*/

const getNumberUser = () => {
  const cardQuantity =+ prompt("Сколько карточек отобразить? 1 - 5");

  if(cardQuantity === null || cardQuantity === "")
    return 0;

  if(cardQuantity < 1 || cardQuantity > 5) {
    return alert('Вы ввели неверное значение! 1 - 5');
  }

  return cardQuantity;
};

  const selectedProducts = productsCard.slice(0, getNumberUser());
  showProductCards(selectedProducts);