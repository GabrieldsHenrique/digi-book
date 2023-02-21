function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function criaLinha(digimon){
    linha = document.createElement("tr");
    teste = document.createElement("div");
    tdNome = document.createElement("td");
    tdLevel = document.createElement("td");
    tdIMG = document.createElement("img");
    tdIMG.src = digimon.img

    tdNome.innerHTML = 'Nome: '+ '\n' + digimon.name
    tdLevel.innerHTML = 'Level:   ' + digimon.level
    tdIMG.style.width = '5rem';



    teste.appendChild(tdNome);
    teste.appendChild(tdLevel);
    linha.appendChild(tdIMG);
    linha.appendChild(teste)


    return linha;
    
}

function main(){
    limpar();
    let data = fazGet("https://digimon-api.vercel.app/api/digimon/")
    let digimons = JSON.parse(data);
    
    digimons.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

function limpar(){
    
    var tabela = document.getElementById('tabela');
    const nodeList= document.querySelectorAll("tr");
    var total = tabela.querySelectorAll("tr").length;

    for (var i = 0; i < total; i++) {
        nodeList[i].outerHTML = "";
       
     }
    
}

function level(level){
    limpar();
    
    let data = fazGet(`https://digimon-api.vercel.app/api/digimon/level/${level}`)
    let digimons = JSON.parse(data);

    digimons.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

function buscaName(){

    if(document.getElementById('buscaNome').value == ""){

    }else{
        limpar();
        
        let data = fazGet(`https://digimon-api.vercel.app/api/digimon/name/${document.getElementById('buscaNome').value}`)
        let digimon = JSON.parse(data);
    
        digimon.forEach(element => {
            let linha = criaLinha(element);
            tabela.appendChild(linha);
        });

        query.value = '';
    }
    
}

function buscaLevel(){
    document.getElementById('buscaLevel').value

    if(document.getElementById('buscaLevel').value == ""){

    }else{
        limpar();

    let data = fazGet(`https://digimon-api.vercel.app/api/digimon/level/${document.getElementById('buscaLevel').value}`)
    let digimon = JSON.parse(data);

    digimon.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

}


main()