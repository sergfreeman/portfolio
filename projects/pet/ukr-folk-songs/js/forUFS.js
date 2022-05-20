import {songIndex} from './textData.js';
import {songGimn} from './textData.js';
import {songKalyna} from "./textData.js";
import {songViter} from "./textData.js";

let differentPages = document.getElementById('differentPages');
let butIndex = document.getElementById('index');
let butGimn = document.getElementById('gimn');
let butKalyna = document.getElementById('kalyna');
let butViter = document.getElementById('viter');

differentPages.innerHTML=songIndex;


//Index information
butIndex.addEventListener('click', function () {
    differentPages.innerHTML=songIndex;
    this.style.opacity = '30%';
    allOpacity100(butIndex);
});

//Gimn Ukrainy
butGimn.addEventListener('click', function () {
    differentPages.innerHTML=songGimn;
    allOpacity100(butGimn);
});

//Chervona Kalyna
butKalyna.addEventListener('click', function () {
    differentPages.innerHTML=songKalyna;
    allOpacity100(butKalyna);
});

//Chervona Kalyna
butViter.addEventListener('click', function () {
    differentPages.innerHTML=songViter;
    allOpacity100(butViter);
});

//Set opacity from all navigate-buttons
function allOpacity100(value) {
    butIndex.style.opacity = '100%';
    butKalyna.style.opacity = '100%';
    butGimn.style.opacity = '100%';
    butViter.style.opacity = '100%';
    value.style.opacity = '30%';
}