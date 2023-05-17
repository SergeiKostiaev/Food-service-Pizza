//----------------Переменные-------------------------------------------------------------
const startBtn = document.getElementById("startBtn");
const box2 = document.getElementById("box2");
const box1 = document.getElementById("box1");
const box3 = document.getElementById("box3");

const cartPage = document.getElementById('cart_page');
let numVol = document.getElementById('numVol');
let numVol2 = document.getElementById('numVol2');
let CartOpen = document.getElementById('cart');
let CartOpen2 = document.getElementById('cart2');
const goBtn = document.getElementById('goBtn');
const addToCart = document.getElementById('add_to_cart');

const arr = [
  {
    name: 'Аррива!',
    about: 'Острая чоризо, цыпленок, томаты, соус бургер, сладкий перец, красный лук, моцарелла, соус ранч, чеснок',
    price: '350 руб.'
  },
  {
    name: 'Аррива!',
    about: 'Острая чоризо, цыпленок, томаты, соус бургер, сладкий перец, красный лук, моцарелла, соус ранч, чеснок',
    price: '350 руб.'
  },
]


function Start() {    
    box1.style.display="none";
    box2.style.display="block";
}
startBtn.addEventListener('click', Start);
function CartOpenPage() {
    box2.style.display="none";
    cartPage.style.display="block";
}
CartOpen.addEventListener('click', CartOpenPage);
function CartOpenPage() {
    box2.style.display="none";
    cartPage.style.display="block";
}
CartOpen.addEventListener('click',CartOpenPage);
function CartOpenPage2() {
    box3.style.display="none";
    cartPage.style.display="block";
}
CartOpen2.addEventListener('click', CartOpenPage2);
function ConstructPage() {
    box2.style.display="none";
    box3.style.display="block";
}
goBtn.addEventListener('click', ConstructPage);

//----------------DRAG & DROP----------------------------------------------------------
function addDnDHandlers() {
    
    let shoppingItems = document.getElementsByClassName('tab_shop');
    let shoppingCartDrop = document.getElementById('cart');
    let shoppingCart = document.querySelectorAll('#cart_bag ul')[0];
    const add_btn_click = document.getElementById('add_to_cart'); // неиспользуется
  
  //------------------------------------------------------------------------------------
    for(var i = 0; i < shoppingItems.length; i++) {
        shoppingItems[i].addEventListener("dragstart", function(e) {

          //Извлекаем все необходимые данные в формате JSON из текущего элемента
          var itemName = this.innerHTML; 
          var getinfo = {'name': itemName, 'id': this.getAttribute("id")};
          var str = JSON.stringify(getinfo); 

          //Указывает передачу данных    
          e.dataTransfer.effectAllowed = "copy";
          //Указывает тип копируемых данных
          e.dataTransfer.setData("Text", str);
          //Установите для EventListener 'useCapture' значение false 
        }, false);
    }
    //-----------------------------------------------------------------------------------
    shoppingCartDrop.addEventListener("dragover", function(e) {
      
      //По умолчанию эффект перетаскивания установлен на «нет».
      if (e.preventDefault)
          e.preventDefault();
      
      //Убедитесь, что dropEffect остается «копией»    
      e.dataTransfer.dropEffect = "copy";
      
      //Предотвращает всплытие через DOM
      return false;

    }, false);
    
    shoppingCartDrop.addEventListener("drop", function(e) {     
    //Предотвращает фазы захвата/пузырьков (не путать с preventDefault)
      if (e.stopPropagation)
        e.stopPropagation();
      
    //Получить все данные из JSON в свои собственные переменные
      var obj = JSON.parse(e.dataTransfer.getData("Text"));
      var itemName = obj.name;
      var itemId = obj.id;
      
    //Эта функция добавит товар на экран корзины покупок.
      addItemToCart(itemName, itemId);
      
    //Предотвращает фазы захвата/пузырьков (не путать с preventDefault)
      e.stopPropagation();
      return false;
    }, false);
    
  //-----------------------------------------------------------------------------------
    function addItemToCart(item, id) {
      
      //Создаем новый узел списка
      var newItem = document.createElement('li');
      
      //Добавить имя элемента в текст HTML
      newItem.innerHTML = item;
      
      //Добавить идентификатор элемента с уникальным идентификатором
      var itemNum = document.querySelectorAll('#cartlist li').length + 1;
      newItem.setAttribute('id', 'item-' + itemNum + '-' + id);
      
      //Добавьте товар в список корзины покупок
      shoppingCart.appendChild(newItem);
      let numCart = document.getElementById('item_bag').children.length;
      numCart = numVol.innerHTML = numCart.valueOf(0);
      numCart = numVol2.innerHTML = numCart.valueOf(0);
    }
}
document.addEventListener("DOMContentLoaded", addDnDHandlers, false);
  



