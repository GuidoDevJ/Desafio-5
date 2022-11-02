import "../../src/components/buttom/button"
import"../../src/components/presentacionTitle/presentacion"
import"../../src/components/papel-hand/hand"
import"../../src/components/piedra-hand/piedra"
import"../../src/components/tijeras-hand/tijeras"
import"../../src/components/custom-text/text"

export const Intructions=(params)=>{
    const div = document.createElement("div")
    const style = document.createElement("style")
    div.classList.add("contenedor")
    
    div.innerHTML = `
    <text-long></text-long>
    <custom-button class="btnEl">Jugar</custom-button>
    <div class="hands">
        <hand-piedra></hand-piedra>
        <hand-tijeras></hand-tijeras>
        <papel-hand></papel-hand>
    </div>
    `
    style.innerHTML=`
    .contenedor{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        padding: 85px 0 0 0;
        overflow:hidden;
    }
    .hands{
        width:80%;
        display:flex;
        justify-content: space-between;
        position:relative;
        top:15px;
    }
    `
    const btn = div.querySelector(".btnEl")
    btn?.addEventListener("click",e=>{
        params.goTo("/play")
    })
    div.appendChild(style)
    
    return div
}