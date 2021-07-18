const app = {
    /**
     * se ejecuta la función mediante el onload del body del HTML
     */
    recibirDatos: function () {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=385'; //recibo url con los datos

        fetch(url)
            .then(respuesta => respuesta.json())//valora la respuesta de la promesa en json
            .then(datos => this.mostrarDatos(datos))//si no hay error, ejecutará el renderizado en HTML llamando a su función
            .catch(error => console.log(error))//si hay error, lo imprimirá por consola

    },
    /**
     *
     * @param datos recibe los datos de la promise evaluada
     */
    mostrarDatos: function (datos) {
        let pokemons = ''; //guardará el renderizado del for
        for (let i = 0; i < 385; i++) { //evalua cada pokémon en la dirección datos.results[índice del pokémon].name
            //cada pokémon es mandado a la variable con el siguiente formato de renderizado
            pokemons+=`<tr class="active-row"><td>${i+1}</td><td>${datos.results[i].name.charAt(0).toUpperCase()+datos.results[i].name.slice(1)}</td></tr>`;
        }
        document.getElementById("printarPokemon").innerHTML = pokemons;//se obtiene ID en donde se renderizará el contenido de pokemons
    }
}