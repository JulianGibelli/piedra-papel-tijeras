import { state } from "../../state";

export function initPageGame(params){
    const pageGame = document.createElement("div") as HTMLElement;
    pageGame.classList.add("mainContainer");
    pageGame.innerHTML = `
    <div class="subContainer">
      
      <div class="handsCointainer">
        <papel-el></papel-el>
        <piedra-el></piedra-el>
        <tijera-el></tijera-el>      
      </div>
    </div>    
    `;

    return pageGame;
}