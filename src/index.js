import "./styles.css";
import { someVariable } from "./something";
import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";

const content = document.getElementById('content');

console.log(someVariable);
loadHomePage();

const homeButton = document.getElementById('home-button');
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadHomePage();
});

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenuPage();
})