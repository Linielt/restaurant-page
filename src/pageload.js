import pizzaImage from "./pizza.jpg";

export const pageload = () => {
    const content = document.getElementById("content");

    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "Lorem Ipsum Restaurant";

    content.appendChild(mainHeader);

    const image = document.createElement('img');
    image.src = pizzaImage;

    content.appendChild(image);

    const description = document.createElement('p');
    description.textContent = "Welcome to Lorem Ipsum Restaurant, We sell pizzas or something.";

    content.appendChild(description);
}