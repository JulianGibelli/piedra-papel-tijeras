import "./styles.css";
//la pagina recibe la funcin de goTo para que sus componentes puedan modificar la url simbolica
//la pagina debe de devolver un unico elemento HTML que se montara en el cascaron

export function initPagePlay(params) {
  let { goTo } = params;
  //inicio la cuenta regresiva si llega a 0 vuelvo al menu de instrucciones
  let valor = 4;
  const setIntervalID = setInterval(() => {
    valor--;

    if (valor == 0) {
      //llevarme el id del intervalo para matarlo en la proxima pagina
      clearInterval(setIntervalID);
      //goTo("/instructions");
    }
  }, 1000);

  const pagePlay = document.createElement("div") as HTMLElement;
  pagePlay.classList.add("mainContainer");
  pagePlay.innerHTML = `
    <div class="subContainer">
      <spinner-el></spinner-el>
      <div class="handsCointainer">
        <papel-el></papel-el>
        <piedra-el></piedra-el>
        <tijera-el></tijera-el>      
      </div>
    </div>    
    `;

  return pagePlay;
}
