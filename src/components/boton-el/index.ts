export function initBotonEl(){
    class BotonEl extends HTMLElement{
        constructor(){
            super()
            this.attachShadow({ mode: "open" });
            this.render()
        }
        render(){
            const boton = document.createElement("button")
            boton.classList.add("boton")
            boton.textContent = this.textContent
            
            const style = document.createElement("style")
            style.innerHTML = `
                .boton{
                    background-color:#006CFC;
                    border: solid 10px #001997;
                    border-radius: 10px;
                    color: white; 
                    font-family: 'Odibee Sans', cursive;
                    font-size: 45px;
                    height: 90px;  
                    width: 322px;
                    cursor: pointer;
                }
            `;
            this.addEventListener("click",()=>{
                console.log("click!!!")
                
            })

            this.shadowRoot?.appendChild(style)
            this.shadowRoot?.appendChild(boton)
        }
    }

    customElements.define("boton-el", BotonEl);
}