
// Requisição para API
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

// Criando Tabela (TD e TR) Com dados adquiridos da API
function criaLinha(digimon){
    linha = document.createElement("tr");
    div = document.createElement("div");
    tdNome = document.createElement("td");
    tdLevel = document.createElement("td");
    tdIMG = document.createElement("img");
    tdIMG.src = digimon.img

    tdNome.innerHTML = 'Nome: '+ '\n' + digimon.name
    tdLevel.innerHTML = 'Level:   ' + digimon.level
    tdIMG.style.width = '5rem';



    div.appendChild(tdNome);
    div.appendChild(tdLevel);
    linha.appendChild(tdIMG);
    linha.appendChild(div)


    return linha;
    
}

// Faz a requisição para a API e cria a tabela fazendo um for com os elementos passados da API, cada elemento gera uma tabela e appenda no 
// Id Tabela aonde os dados serem imprimidos
// Essa funcao inicia junto com a pagina
function main(){
    limpar();
    let data = fazGet("https://digimon-api.vercel.app/api/digimon/")
    let digimons = JSON.parse(data);
    
    digimons.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

// Limpa a ID-tabela para quando os proximos dados serem imprimidos
function limpar(){
    
    var tabela = document.getElementById('tabela');
    const nodeList= document.querySelectorAll("tr");
    var total = tabela.querySelectorAll("tr").length;

    for (var i = 0; i < total; i++) {
        nodeList[i].outerHTML = "";
       
     }
    
}

// Faz a requisição para a API e cria a tabela fazendo um for com os elementos passados da API, cada elemento gera uma tabela e appenda no 
// Id Tabela aonde os dados serem imprimidos
function level(level){
    limpar();
    
    let data = fazGet(`https://digimon-api.vercel.app/api/digimon/level/${level}`)
    let digimons = JSON.parse(data);

    digimons.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

// Faz a requisição para a API e cria a tabela fazendo um for com os elementos passados da API, cada elemento gera uma tabela e appenda no 
// Id Tabela aonde os dados serem imprimidos
// Se a ao chamar a funcao o Input tiver vazio não faz nada
// Quando chamar a funcao pega o Valor do imput e faz a requisição para a API
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
// Faz a requisição para a API e cria a tabela fazendo um for com os elementos passados da API, cada elemento gera uma tabela e appenda no 
// Id Tabela aonde os dados serem imprimidos
// Se a ao chamar a funcao o Input tiver vazio não faz nada
// Quando chamar a funcao pega o Valor do imput e faz a requisição para a API
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