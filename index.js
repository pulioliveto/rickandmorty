
const URL = 'https://rickandmortyapi.com/api/character'
const inputBuscar = document.getElementById('inputFiltro');

fetch(URL)
	.then(response => response.json())
	.then(data => {
        let arrayContainer = data.results
        arrayContainer.map(elemento =>{
            let contenido = '';
            contenido += `
            <div class="card">
                <img src="${elemento.image}" alt="Imagen de los personajes" />
                <div class="container-text">
                    <h2>${elemento.name}</h2>
                    <p>${elemento.species}</p>
                </div>
            </div>`
            document.getElementById('container').innerHTML += contenido;
        })
    })
	.catch(err => console.error(err));

    inputBuscar.addEventListener('keyup', () => {
        let busquedaEnMinuscula = inputBuscar.value.toLowerCase();
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            let nombre = card.querySelector('h2').innerHTML.toLowerCase();
            let especie = card.querySelector('p').innerHTML.toLowerCase();

            if(nombre.includes(busquedaEnMinuscula) || especie.includes(busquedaEnMinuscula)){
                card.style.display = 'inline-block';
            } 
            
            else {
                card.style.display = 'none';
                
            }
        })
    })




    