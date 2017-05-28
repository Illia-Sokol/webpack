import './index.scss';
import 'normalize.css';

import createMenu from '../components/menu/menu'
var menu = createMenu(['sokol', 'falcon'], 'menu')
document.body.appendChild(menu);

console.log('in index.js');
