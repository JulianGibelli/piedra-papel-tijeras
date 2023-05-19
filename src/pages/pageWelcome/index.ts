import "./styles.css"
//la pagina recibe la funcin de goTo para que sus componentes puedan modificar la url simbolica
//la pagina debe de devolver un unico elemento HTML que se montara en el cascaron

const imagePapelURL = require("url: ../../../src/assets/papel.png")
const imagePiedraURL = require("url: ../../../src/assets/piedra.png")
const imageTijerasURL = require("url: ../../../src/assets/tijera.png")

export function initPageWelcome(params) {
    let {goTo} = params
    const pageWelcome = document.createElement("div") as HTMLElement;
    pageWelcome.classList.add("mainContainer");
    pageWelcome.innerHTML = `
    <div class="subContainer">
      <text-el tag="h1">Piedra Papel ó Tijeras</text-el>
      <boton-el class="jump">Empezar</boton-el>
      <div class="handsCointainer">
        <img src=${imagePapelURL} />
        <img src=${imagePiedraURL} />
        <img id="tijera" src=${imageTijerasURL} />        
      </div>
    </div>
    `;
   pageWelcome.querySelector(".jump")?.addEventListener("click", (e) => {
     e.preventDefault();
     goTo("/instructions");
   }); 
  
  return pageWelcome;
}
