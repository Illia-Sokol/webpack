import './blog.scss';

import createMenu from '../components/menu/menu'
var menu = createMenu(['sokol', 'falcon'], 'main-menu')
document.body.appendChild(menu);

console.log('in blog.js');
