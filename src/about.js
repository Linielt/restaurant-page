export const loadAboutPage = () => {
    const content = document.getElementById('content');

    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.id = "about-us-container";
    
    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.textContent = "About us";

    const aboutUsContent = document.createElement('p');
    aboutUsContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus fermentum sem eu congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam posuere pretium euismod. Quisque nec euismod sapien, vitae dictum felis. Donec congue magna dui, eu luctus felis rutrum quis. Ut eu gravida sem. Proin tempor, tortor ac imperdiet consequat, nibh nunc tristique diam, vel facilisis libero felis ut eros. Donec vulputate aliquam lacinia. Integer lobortis ante id interdum efficitur. Fusce eu mi erat. Nam vitae neque mattis, pretium est eget, elementum nisi. Etiam vitae convallis massa. Nulla facilisi.";

    aboutUsContainer.appendChild(aboutUsHeader);
    aboutUsContainer.appendChild(aboutUsContent);
    content.appendChild(aboutUsContainer);
}