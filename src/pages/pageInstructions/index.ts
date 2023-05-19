import "./styles.css";
//la pagina recibe la funcin de goTo para que sus componentes puedan modificar la url simbolica
//la pagina debe de devolver un unico elemento HTML que se montara en el cascaron

const imagePapelURL = require("url: ../../../src/assets/papel.png");
const imagePiedraURL = require("url: ../../../src/assets/piedra.png");
const imageTijerasURL = require("url: ../../../src/assets/tijera.png");
export function initPageInstructions(params) {
  let { goTo } = params;
  const pageInstructions = document.createElement("div") as HTMLElement;
  pageInstructions.classList.add("mainContainer");
  pageInstructions.innerHTML = `
    <div class="subContainer">
      <text-el tag="p">Presioná jugar
y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-el>
      <boton-el class="jump">¡Jugar!</boton-el>
      <div class="handsCointainer">
        <img src=${imagePapelURL} />
        <img src=${imagePiedraURL} />
        <img id="tijera" src=${imageTijerasURL} />        
      </div>
    </div>    
    `;
  pageInstructions.querySelector(".jump")?.addEventListener("click", (e) => {
    e.preventDefault();
    goTo("/play");
  });
  return pageInstructions;
}
