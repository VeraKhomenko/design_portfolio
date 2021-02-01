import menuTemplate from '../templates/menu.hbs';
import menuItems from '../menu.json';

console.log(menuItems);
const markup = menuTemplate(menuItems);

console.log(markup);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
