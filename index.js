"use strict";

(function () {
  let btns = document.querySelectorAll(`.menuOpener`);
  let divs = document.querySelectorAll(`.vertical-menu`);
  for (let i = 0; i < btns.length; i++) {
    let links = divs[i].querySelectorAll(`a`);
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener(`click`, function(){
            for(let j = 0; j < links.length; j++){
                links[j].classList.remove(`active`);
            }
            links[i].classList.add(`active`);
        });
    }
    btns[i].addEventListener(`click`, function () {
      if (divs[i].classList.contains(`concealed`)) {
        divs[i].classList.remove(`concealed`);
      } else {
        divs[i].classList.add(`concealed`);
      }
    });
  }
})();
