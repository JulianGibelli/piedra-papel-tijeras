import { initRouter } from "./router"
import { initTextEl } from "./components/text-el"
import { initBotonEl } from "./components/boton-el"
import { initSpinnerEl } from "./components/spinner-el"
import { initPiedraEl } from "./components/piedra-el"
import { initPapelEl } from "./components/papel-el"
import { initTijeraEl } from "./components/tijera-el"
/* 
index.ts: deberia de tomar el elemento root del html y darselo al root
para que monte alli las distintas paginas segun la url simbolica
input: un elemento html
*/

(function(){
    initTextEl()
    initBotonEl()
    initSpinnerEl()
    initPiedraEl();
    initPapelEl();
    initTijeraEl()
    const cascaron = document.getElementById("root") as  HTMLElement
    initRouter(cascaron)



})()