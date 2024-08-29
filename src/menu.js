export const loadMenuPage = () => {
    const content = document.getElementById("content");

    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "Menu";

    content.appendChild(mainHeader);

    const startersContainer = document.createElement('div');
    startersContainer.id = "starters-container";
    startersContainer.className = "menu-items-container";

    const startersHeader = document.createElement('h2');
    startersHeader.textContent = "Starters";

    const starters = [];

    const mozzarellaSticks = new MenuItem(
        "Mozzarella Sticks",
        "Crispy mozzarella sticks served with marinara sauce",
        "£2.99"
    );

    const garlicFlatbread = new MenuItem(
        "Garlic Flatbread",
        "Garlic and parsley butter",
        "£5.99"
    );

    starters.push(mozzarellaSticks);
    starters.push(garlicFlatbread);

    for (let starter of starters) {
        loadMenuItemIntoContainer(starter, startersContainer);
    }

    content.appendChild(startersHeader);
    content.appendChild(startersContainer);

    const mainsContainer = document.createElement('div');
    mainsContainer.id = "mains-container";
    mainsContainer.className = "menu-items-container";

    const mainsHeader = document.createElement('h2');
    mainsHeader.textContent = "Mains";

    const mains = [];

    const margheritaPizza = new MenuItem(
        "Margherita Pizza",
        "The classic pizza everyone loves!",
        "£7.99"
    );

    const pepperoniPizza = new MenuItem(
        "Pepperoni Pizza",
        "Our classic Margherita topped with pepperoni slices",
        "£9.99"
    );

    mains.push(margheritaPizza);
    mains.push(pepperoniPizza);

    for (let main of mains) {
        loadMenuItemIntoContainer(main, mainsContainer);
    }

    content.appendChild(mainsHeader);
    content.appendChild(mainsContainer);

    const drinksContainer = document.createElement('div');
    drinksContainer.id = "drinks-container";
    drinksContainer.className = "menu-items-container";

    const drinksHeader = document.createElement('h2');
    drinksHeader.textContent = "Drinks";

    const drinks = [];

    const orangeJuice = new MenuItem(
        "Orange Juice",
        "Made from freshly squeezed oranges",
        "£3.39"
    );

    const sparklingMineralWater = new MenuItem(
        "Sparkling Mineral Water",
        "",
        "£2.99"
    );

    drinks.push(orangeJuice);
    drinks.push(sparklingMineralWater);

    for (let drink of drinks) {
        loadMenuItemIntoContainer(drink, drinksContainer);
    }

    content.appendChild(drinksHeader);
    content.appendChild(drinksContainer);
}

const loadMenuItemIntoContainer = (menuItem, container) => {
    const menuItemContainer = document.createElement('div');
    menuItemContainer.className = "menu-item-container";

    const menuItemHeader = document.createElement('h3');
    menuItemHeader.textContent = menuItem.name;

    const menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = menuItem.description;

    const menuItemPrice = document.createElement('h5');
    menuItemPrice.textContent = menuItem.price;

    menuItemContainer.appendChild(menuItemHeader);
    menuItemContainer.appendChild(menuItemDescription);
    menuItemContainer.appendChild(menuItemPrice);

    container.appendChild(menuItemContainer);
}

class MenuItem {
    #name;
    #description;
    #price;

    constructor(name, description, price) {
        this.#name = name;
        this.#description = description;
        this.#price = price;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get description() {
        return this.#description;
    }

    set description(description) {
        this.#description = description;
    }

    get price() {
        return this.#price;
    }

    set price(price) {
        this.#price = price;
    }
}