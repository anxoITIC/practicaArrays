			
// POKEMONS

let dades;


// POKEMONS
fetch("js/data/pokemon.json")
.then((response) => response.json())
.then((data) => {
	dades = data.pokemon;		
	
	console.log(dades);
	console.log(dades[0].name);

});

//funció que inicialitza de nou les dades
function refreshDades() {
	dades.reload();

}

//funció que ordena les dades de forma ascendent
function ascendent() {


}

//funció que ordena les dades de forma descendent
function descendent() {

}

//botó de búsqueda
function botoBusqueda() {


}

//botó que calcula la mitjana del valor afegit en el últim bloc afegit a l'array
function mitjanaValorAfegit() {


}

/*
// MUNICIPIS
fetch("js/data/municipis.json")
.then((response) => response.json())
.then((data) => {
	dades = data.elements;		
	
	console.log(dades)
	console.log(dades[0].municipi_nom)
});

/*

// METEORITS
fetch("js/data/earthMeteorites.json")
.then((response) => response.json())
.then((data) => {
	dades = data;		
	
	console.log(dades)
	console.log(dades[0].name)
});


// MOVIES
fetch("js/data/movies.json")
.then((response) => response.json())
.then((data) => {
	dades = data.movies;		
	
	console.log(dades)
	console.log(dades[0].title)
});

*/