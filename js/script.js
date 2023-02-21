if(window.SimpleAnime){
	new SimpleAnime({});
}


function manuscrito(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';
	for(let i = 0; i < textoArray.length; i++) {
		setTimeout(() => elemento.innerHTML += textoArray[i], 100 * i);
		}
	}
	
	const titulo = document.querySelector('h1');
	manuscrito(titulo);
	
function esconde(el) {
    document.getElementById(el).style.display = 'none';
}

function aparece(el) {
	document.getElementById(el).style.display = 'block';
	
}

function personagem(el) {
	document.getElementById(el).style.display = 'grid';
	
}


