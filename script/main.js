function criarFichas(){
    let totaldepontos = document.getElementById('qntpontos').value
    let qntdefichas = document.getElementById('qntfichas').value 
    let output = document.getElementById('output')
    output.innerHTML = ``
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function numDeAtributo(){
        let maxnum = Number()
        if(totaldepontos<6){
            maxnum = totaldepontos
        }else{
            maxnum = 6
        }
        let atributo = getRandomInt(0, maxnum)
        totaldepontos = totaldepontos-atributo
        return atributo
    }
    for(let i = 1; i<=qntdefichas; i++){
        let res = numDeAtributo()
        output.innerHTML+=
        `<div class="ficha">
            <h2>Ficha ${i}</h2>
            <p>Força</p> ${numDeAtributo()} <br> <p>Habilidade</p> ${numDeAtributo()} <br> <p>Resistência</p> ${res} <br> <p>Armadura</p> ${numDeAtributo()} <br> <p>Poder de fogo</p> ${numDeAtributo()} <br> <p>Vantagens</p><br> PV extra x${totaldepontos}<br> <p>PV</p> ${(res*5)+(totaldepontos*10)}/${(res*5)+(totaldepontos*10)} <br> <p>PM</p> ${res*5}/${res*5}
        </div>`
        totaldepontos = document.getElementById('qntpontos').value
    }
}