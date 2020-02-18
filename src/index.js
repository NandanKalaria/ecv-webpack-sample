import {writeToScreen} from './text.js';
import {changeH1} from './text.js';

writeToScreen()
changeH1("Hola Amigos, izza hot reloading!")

if(module && module.hot) module.hot.accept()