// Import stylesheets
// import './style.css';

// Local Storage. Classwork
// Обязательное условие: Использовать бустрап

// Задание №1
// Создайте  корзину с инпутами - продукт, категория, стоимость, доставка, значение которых будет автоматически сохраняться при каждом их изменении. Последнее введённое значение должно сохраняться если пользователь закроет и заново откроет страницу.

//ключ - карт, это будет массив с объектами. в этих объектах будет

function initStorage() {
    if(!localStorage.getItem('products-data')) { //null
        localStorage.setItem('products-data', '[]');
    };
};
initStorage()

function setProductsToStorage (cart) {
    localStorage.setItem('products-data', JSON.stringify(cart)); //закинуть в Local storage
};

function getProductsFromStorage () {
    let cart = JSON.parse(localStorage.getItem('products-data'));
    return cart; //отдает результат в виде массива с объектами
};

let inpProd = document.querySelector('.form-product-inp');
let inpCat = document.querySelector('.form-category-inp');
let inpPrice = document.querySelector('.form-price-inp');
let inpDeliv = document.querySelector('.form-delivery-inp');

function createProduct (){
    // e.preventDefault()

    let cart = getProductsFromStorage();
    // console.log(cart);

    let product = cart.find(item => item.title == inpProd.value);
    // console.log(product)

    if(product) {

        product.category = inpCat.value,
        product.price = inpPrice.value,
        product.delivery = inpDeliv.value

        console.log(product)

        setProductsToStorage(cart);

    } else {

        let productObj = {
            title: inpProd.value,
            category: inpCat.value,
            price: inpPrice.value,
            delivery: inpDeliv.value
        };
    
        cart.push(productObj);
        setProductsToStorage(cart);
    }

    inpProd.value = '';
    inpCat.value = '';
    inpPrice.value = '';
    inpDeliv.value = '';

    render ()
};

inpDeliv.addEventListener('change', createProduct)

// let addBtn = document.querySelector('#btn-id')

// addBtn.addEventListener('click', e =>{
//     e.preventDefault()
//     createProduct()
// })

function render () {
    let container = document.querySelector('.container');
    container.innerHTML = '';

    let data = getProductsFromStorage();

    data.forEach(item => {
        container.innerHTML += `
        <div class="card w-25 m-2" style="width: 18rem;" title = ${item.title}"> 
            <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text"><b>Category</b> ${item.category}</p>
            <p class="card-text"><b>Price</b> ${item.price}$</p>
            <p class="card-text"><b>Delivery</b> ${item.delivery}</p>
            <a href="#" class="btn btn-danger delete-product-btn">Delete</a>
            <a href="#" class="btn btn-secondary update-product-btn">Update</a>
            </div>
        </div>
        `
    }); 
}
render()

//событие инпут
//форма 4 инпута сохранить - если продукт есть, title - то меняем, если title другой, то досохранить

//заполненная форма - сохраняет

// Задание №2
// Создайте форму обратной связи используя  селекторы, события и localStorage
// Например форма должна содержать поля - имя, имейл, сообщение, кнопки отправить и очистить

// function initStorage() {
//     if(!localStorage.getItem('message-data')) { //null
//         localStorage.setItem('message-data', '[]');
//     };
// };
// initStorage();

// function setMessagesToStorage (msgList) {
//     localStorage.setItem('message-data', JSON.stringify(msgList)); //закинуть в Local storage
// };

// function getMessagesFromStorage () {
//     let msgList = JSON.parse(localStorage.getItem('message-data'));
//     return msgList; //отдает результат в виде массива с объектами
// };

// let nameInp = document.querySelector('.name-inp');
// let emailInp = document.querySelector('.email-inp');
// let msgInp = document.querySelector('.msg-inp');

// let btnSend = document.querySelector('.send-btn');
// let btnClear = document.querySelector('.clear-btn');

// btnSend.addEventListener('click', e => {
//     e.preventDefault()

//     if (!nameInp.value.trim() || !emailInp.value.trim() || !msgInp.value.trim()) {
//         alert('Some inputs are empty!');
//         return
//     };

//     let userObj = {
//         name: nameInp.value,
//         email: emailInp.value,
//         message: msgInp.value
//     }

//     let msgList = getMessagesFromStorage()
//     msgList.push(userObj)
//     setMessagesToStorage(msgList)
    
// })

// btnClear.addEventListener('click', e => {
//     localStorage.clear()
// })

//forma inputy очистить - local storage clear
