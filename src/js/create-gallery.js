import menuTemplate from '../templates/template.hbs'
import menuItems from '../menu.json'

const galleryRef = document.querySelector('.js-menu');

const markup = menuTemplate(menuItems);

galleryRef.insertAdjacentHTML('beforeend', markup);
