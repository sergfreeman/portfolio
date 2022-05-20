import { setTheDate } from "./setDate.js";
//import { PET } from "./getData.js";


window.onload = function () {
    //Show the current date in the right side of header
    let timeBox = document.querySelector(".theTime");
    timeBox.innerHTML = setTheDate();


    //Get menu paragraph
    let ulLanding = document.querySelector('label[for="ul-landing"]');
    ulLanding.addEventListener('click', function(){
        ulLanding.setAttribute('textAlign', 'center');
    });
    //Get all landing menu elements

    const LANDING_MENU_ELEMENTS = document.querySelectorAll('li.li-style-landing');
    LANDING_MENU_ELEMENTS.forEach(function (act) {
        switch(act.getAttribute('name')){
            case 'ukr_folk_song': {
                let name = act.addEventListener('click', function(){
                }); break;
            }
            case 'the_dice': {
                let name = act.addEventListener('click', function(){
                })
            }
        }
    })
};
