export function initPageInstructions(params){
    const pageInstructions = document.createElement("div") as HTMLElement;
    pageInstructions.classList.add("mainContainer");
    pageInstructions.innerHTML = `
        <h2>instrucciones!</h2>
    `
    return pageInstructions
}