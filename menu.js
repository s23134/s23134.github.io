window.onload = function (){
    let menu = localStorage.getItem("menu");
    if(menu === null){
        menu = '{\n' +
            '  "menu": [\n' +
            '    {\n' +
            '      "id": 1,\n' +
            '      "image": "./images/food/pasta.jpg",\n' +
            '      "name": "Nazwa potrawy",\n' +
            '      "price": 150,\n' +
            '      "description": "jkdjkw jegjwbej bghwebg hjwbeghj bwehjgb whjebg hjwbegh wbehj gbwhjebg hwebg hwbekghj bwkhje bgwheb ghjwebg hwebg hebg hebghebgh jwbehg bwhebgw heblghwbleg jkbwle jgblw jebglhjwbe lghbwlehgblwhebg lhwbeglhw ebghlwbelghbwelhgbw lhebglhwbe glhwblehgbw lhebglwheb ghwbe hbwehg bwhebg hwbg hw hjwbe jhwjh jhwb eghwb gwlj gkwje jkw jgbwje bghwheg"\n' +
            '    },\n' +
            '    {\n' +
            '      "id": 2,\n' +
            '      "image": "./images/food/pasta.jpg",\n' +
            '      "name": "Nazwa potrawy",\n' +
            '      "price": 50,\n' +
            '      "description": "jkdjkw jegjwbej bghwebg hjwbeghj bwehjgb whjebg hjwbegh wbehj gbwhjebg hwebg hwbekghj bwkhje bgwheb ghjwebg hwebg hebg hebghebgh jwbehg bwhebgw heblghwbleg jkbwle jgblw jebglhjwbe lghbwlehgblwhebg lhwbeglhw ebghlwbelghbwelhgbw lhebglhwbe glhwblehgbw lhebglwheb ghwbe hbwehg bwhebg hwbg hw hjwbe jhwjh jhwb eghwb gwlj gkwje jkw jgbwje bghwheg"\n' +
            '    },\n' +
            '    {\n' +
            '      "id": 3,\n' +
            '      "image": "./images/food/pasta.jpg",\n' +
            '      "name": "Nazwa potrawy",\n' +
            '      "price": 50,\n' +
            '      "description": "jkdjkw jegjwbej bghwebg hjwbeghj bwehjgb whjebg hjwbegh wbehj gbwhjebg hwebg hwbekghj bwkhje bgwheb ghjwebg hwebg hebg hebghebgh jwbehg bwhebgw heblghwbleg jkbwle jgblw jebglhjwbe lghbwlehgblwhebg lhwbeglhw ebghlwbelghbwelhgbw lhebglhwbe glhwblehgbw lhebglwheb ghwbe hbwehg bwhebg hwbg hw hjwbe jhwjh jhwb eghwb gwlj gkwje jkw jgbwje bghwheg"\n' +
            '    },\n' +
            '    {\n' +
            '      "id": 4,\n' +
            '      "image": "./images/food/pasta.jpg",\n' +
            '      "name": "Nazwa potrawy",\n' +
            '      "price": 50,\n' +
            '      "description": "jkdjkw jegjwbej bghwebg hjwbeghj bwehjgb whjebg hjwbegh wbehj gbwhjebg hwebg hwbekghj bwkhje bgwheb ghjwebg hwebg hebg hebghebgh jwbehg bwhebgw heblghwbleg jkbwle jgblw jebglhjwbe lghbwlehgblwhebg lhwbeglhw ebghlwbelghbwelhgbw lhebglhwbe glhwblehgbw lhebglwheb ghwbe hbwehg bwhebg hwbg hw hjwbe jhwjh jhwb eghwb gwlj gkwje jkw jgbwje bghwheg"\n' +
            '    }\n' +
            '  ]\n' +
            '}';
    }

    const menuItems = JSON.parse(menu);

    for(let menuItem of menuItems.menu){
        const menuContainer = document.getElementById('menu-container');

        const foodCard = document.createElement('div');
        foodCard.classList.add('food-card');

        const image = document.createElement('img');
        image.alt = 'food';
        image.src = menuItem.image;
        foodCard.appendChild(image);

        const foodContent = document.createElement('div');
        foodContent.classList.add('food-card-content');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('food-header');

        const h3 = document.createElement('h3');
        h3.innerHTML = menuItem.name;

        const p = document.createElement('p');
        p.innerHTML = menuItem.price + " zł";

        cardHeader.appendChild(h3);
        cardHeader.appendChild(p);

        foodContent.appendChild(cardHeader);

        const hr = document.createElement('hr');
        foodContent.appendChild(hr);

        const description = document.createElement('p');
        description.classList.add('food-description');
        description.innerHTML = menuItem.description;

        foodContent.appendChild(description);

        const button = document.createElement('button');
        button.classList.add("btn");
        button.classList.add("btn-info");
        button.innerHTML = "Do koszyka";
        button.addEventListener('click', () => addToCart(menuItem));

        foodContent.appendChild(button);

        foodCard.appendChild(foodContent);

        menuContainer.appendChild(foodCard);

    }

    mybutton = document.getElementById("myBtn");
    mybutton.addEventListener('click', topFunction);

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.getElementById("header").scrollIntoView({
            behavior: 'smooth'
        });
    }

    updateCartQuantity();

}
