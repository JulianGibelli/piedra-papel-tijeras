import { state } from "../../state";

export function initTijeraEl() {
  const imageTijeraURL = require("url: ../../../src/assets/tijera.png");
  class TijeraEl extends HTMLElement {
    identificador=3;
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const img = document.createElement("img");
      img.setAttribute("src", imageTijeraURL);
      img.classList.add("img");
      const style = document.createElement("style");
      style.innerHTML = `
                .img{
                    opacity: 0.5;
                    height:200px;
                }

                .img:hover{
                    opacity: 1;
                    cursor:pointer;
                    
                }
            `;
      this.addEventListener("click", () => {
        console.log("id del componente:", this.identificador);
        state.setClicked(this.identificador);
      });
      this.shadowRoot?.appendChild(style);
      this.shadowRoot?.appendChild(img);
    }
  }

  customElements.define("tijera-el", TijeraEl);
}
