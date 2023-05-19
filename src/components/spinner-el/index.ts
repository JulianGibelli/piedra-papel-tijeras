export function initSpinnerEl() {
  class SpinnerEl extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      this.render()
    }
   
    render() {
     
      const style = document.createElement("style");
      style.innerHTML = `
            .loader {
      width: 248px;
      height: 248px;      
      border-radius: 50%;
      position: relative;
      transform:rotate(45deg);
      box-sizing: border-box;
    }
    .loader::before {
      content: "";
      position: absolute;
      box-sizing: border-box;
      inset:-10px;
      border-radius: 50%;
      border:30px solid #006CFC;
      animation: prixClipFix 4s infinite linear;
    }

    @keyframes prixClipFix {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }
      
                  
            
        `;
      const divPrincipal = document.createElement("div");
      divPrincipal.classList.add("loader");

      this.shadowRoot?.appendChild(style);
      this.shadowRoot?.appendChild(divPrincipal);
    }
  }
  customElements.define("spinner-el", SpinnerEl);
}
