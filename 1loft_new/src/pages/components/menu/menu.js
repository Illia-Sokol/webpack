import './menu.scss';
import 'normalize.css';

export default function createMenu(arr, className) {
    let newUl = document.createElement('ul');
    newUl.className = className;
    // arr.forEach( (i) => newUl.innerHTML += `<li>${i}</li>`);
    newUl.innerHTML = arr.map( (i) => `<li>${i} + maps </li>`).join(' ');
    return newUl;
}