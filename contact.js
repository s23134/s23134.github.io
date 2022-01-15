window.onload = function (){

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const sendMessageButton = document.getElementById('send');
    
    sendMessageButton.addEventListener('click', () => {
        if(!name.value == "" && !email.value == "" && !message.value == ""){
            name.value = "";
            email.value = "";
            message.value = "";
            const notification = document.createElement('div');
            notification.classList.add('toastr');
            const text = document.createElement('p');
            text.innerHTML = 'Dziękujemy za skorzystanie z naszego formularza :)';
            notification.appendChild(text);
            document.body.appendChild(notification);    
            setTimeout(() => removeToastr(notification), 3000);
        }
        else {
            const notification = document.createElement('div');
            notification.classList.add('toastr');
            const text = document.createElement('p');
            text.innerHTML = 'Formularz nie został wypełniony';
            notification.appendChild(text);
            document.body.appendChild(notification);    
            setTimeout(() => removeToastr(notification), 3000);
        }
    });
    updateCartQuantity();
}

function removeToastr(element){
    document.body.removeChild(element);
}