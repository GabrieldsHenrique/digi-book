if(window.SimpleAnime){
	new SimpleAnime({});
}


function manuscrito(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';
	for(let i = 0; i < textoArray.length; i++) {
		setTimeout(() => elemento.innerHTML += textoArray[i], 105 * i);
		}
	}
	
	const titulo = document.querySelector('h1');
	manuscrito(titulo);

function proximo(elemento) {
		const textoArray = elemento.innerHTML.split('');
		elemento.innerHTML = '';
		for(let i = 0; i < textoArray.length; i++) {
			setTimeout(() => elemento.innerHTML += textoArray[i], 105 * i);
			}
		}
		
		const historia = document.querySelector('p');

	
function esconde(el) {
    document.getElementById(el).style.display = 'none';
	document.getElementById('botao_bem').style.display = 'none';
	document.getElementById('historia').style.display = 'block';
	document.getElementById('botao_proximo').style.display = 'block';
}

$(".btn").click(function(e){
	$(this).text("mudei");
  });
