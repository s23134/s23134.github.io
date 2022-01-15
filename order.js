let userCart = [];
let noOrderDiv;
let orderButton;

window.onload = function (){

    noOrderDiv = document.getElementById('no-order');

    updateCartQuantity();

    for(let menuItem of userCart){
        let menuContainer = document.getElementById('menu-container');

        let foodCard = document.createElement('div');
        foodCard.id = menuItem.id;
        foodCard.classList.add('food-card');

        let image = document.createElement('img');
        image.alt = 'food';
        image.src = menuItem.image;
        foodCard.appendChild(image);

        let foodContent = document.createElement('div');
        foodContent.classList.add('food-card-content');

        let cardHeader = document.createElement('div');
        cardHeader.classList.add('food-header');

        let h3 = document.createElement('h3');
        h3.innerHTML = menuItem.name;

        let p = document.createElement('p');
        p.innerHTML = menuItem.price + " zł";

        cardHeader.appendChild(h3);
        cardHeader.appendChild(p);

        foodContent.appendChild(cardHeader);

        let hr = document.createElement('hr');
        foodContent.appendChild(hr);

        let description = document.createElement('p');
        description.classList.add('food-description');
        description.innerHTML = menuItem.description;

        foodContent.appendChild(description);

        let button = document.createElement('button');
        button.classList.add("btn");
        button.classList.add("btn-danger");
        button.innerHTML = "Usuń";
        button.addEventListener('click', () => removeFromCart(menuItem));

        foodContent.appendChild(button);

        foodCard.appendChild(foodContent);

        menuContainer.appendChild(foodCard);

    }

    if(userCart.length > 0) {

        orderButton = document.createElement('button');
        orderButton.classList.add('btn');
        orderButton.classList.add('btn-info');
        orderButton.classList.add('order-button');
        orderButton.innerHTML = "Złóż zamówienie";
        orderButton.addEventListener('click', orderAll);

        document.getElementById('main-page').appendChild(orderButton);
    }

};

function addToCart(menuItem){

    let notification = document.createElement('div');
    notification.classList.add('toastr');
    let text = document.createElement('p');
    text.innerHTML = "Dodano do koszyka :)";
    notification.appendChild(text);

    document.body.appendChild(notification);

    setTimeout(() => removeToastr(notification), 3000);

    userCart.push(menuItem);
    localStorage.setItem('user_cart', JSON.stringify(userCart));
    updateCartQuantity();
}

function updateCartQuantity(){

    let cart = localStorage.getItem("user_cart");
    if(cart !== null){
        userCart = JSON.parse(cart);
    }

    let headerNav = document.getElementById('header-navigation');
    let cartQuantity = document.getElementById('cart-quantity');

    if(cartQuantity === null){
        cartQuantity = document.createElement('div');
        cartQuantity.classList.add('cart-quantity');
        headerNav.appendChild(cartQuantity);
    }

    cartQuantity.innerHTML = userCart.length;

    if(userCart.length === 0 && noOrderDiv !== undefined){
        noOrderDiv.style.display = 'flex';
        if(orderButton !== undefined) {
            (document.getElementById('main-page')).removeChild(orderButton);
        }
    }else if(userCart.length !== 0 && noOrderDiv !== undefined){
        noOrderDiv.style.display = 'none';
    }
}

function removeFromCart(menuItem){

    let oldItem = userCart.find(m => m.id === menuItem.id);
    let index = userCart.indexOf(oldItem);
    userCart.splice(index, 1);

    let element = document.getElementById(menuItem.id);
    document.getElementById('menu-container').removeChild(element);

    localStorage.setItem('user_cart', JSON.stringify(userCart));
    updateCartQuantity();
}

function orderAll(){
    const noOrder = document.querySelector('.menu-container'); 
    noOrder.style.display = 'none';
    let notification = document.createElement('div');
    notification.classList.add('toastr');
    let text = document.createElement('p');
    text.innerHTML = "Dziękujemy! Zamówienie zostało złożone :)";
    notification.appendChild(text);
    document.body.appendChild(notification);
    setTimeout(() => removeToastr(notification), 3000);
    console.log(userCart);
    let copyCart = [];
    copyCart.push(...userCart);
    for(let menuItem of copyCart){
        removeFromCart(menuItem);
    }
}

function removeToastr(element){
    document.body.removeChild(element);
}