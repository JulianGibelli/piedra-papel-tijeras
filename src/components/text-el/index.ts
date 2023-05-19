export function initTextEl() {
  class TextEl extends HTMLElement {
    tagName: string;
    tags: string[] = ["h1", "p"];
    tag: string = "p";
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      if (this.tags.includes(this.getAttribute("tag") || "")) {
        this.tag = this.getAttribute("tag") || this.tag;
      }

      this.render();
    }

    render() {
      //creo un elemento segun lo que me pasen por la etiqueta tag
      const contenedorTexto = document.createElement(this.tag);
      contenedorTexto.classList.add(this.tag); 
      const style = document.createElement("style");
      style.innerHTML = `
                
                .h1{
                    font-size: 80px;                    
                    color: #009048;
                    margin: 0;
                    width: 284px;    
                    text-align: center;                
                    word-break: keep-all;
                    font-family: 'Odibee Sans', cursive;
                  }
                  .p{
                    margin: 0;
                    width: 284px;    
                    text-align: center;                
                    font-size: 40px;
                    font-weight: 600;
                    font-family: 'Odibee Sans', cursive;
                    
                }
            `;
      contenedorTexto.textContent = this.textContent;
      this.shadowRoot?.appendChild(style);
      this.shadowRoot?.appendChild(contenedorTexto);
    }
  }

  customElements.define("text-el", TextEl);
}
