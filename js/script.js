// Chama a função de Animação
if(window.SimpleAnime){
	new SimpleAnime({});
}

// Funcao que cria uma anicação de digitação
function manuscrito(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';
	for(let i = 0; i < textoArray.length; i++) {
		setTimeout(() => elemento.innerHTML += textoArray[i], 100 * i);
		}
	}
	
	const titulo = document.querySelector('h1');
	manuscrito(titulo);

	// Quando chamar a função esconde determinado elemento
function esconde(el) {
    document.getElementById(el).style.display = 'none';
}
// Quando chamar a função esconde determinado elemento
function aparece(el) {
	document.getElementById(el).style.display = 'block';
	
}
// Quando chamar a função esconde determinado elemento
function personagem(el) {
	document.getElementById(el).style.display = 'grid';
	
}


