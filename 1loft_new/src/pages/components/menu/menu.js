import './menu.scss';
import 'normalize.css';

export default function createMenu(arr, className) {
    var newUl = document.createElement('ul');
    newUl.className = className;
    // arr.forEach( function(i) {
    //      newUl.innerHTML += '<li>'+ i + '</li>';
    // });
    newUl.innerHTML = arr.map( function(i) {
      return '<li>' + i + ' maps</li>'
    }).join(' ');
    return newUl;
}