const razasPerros=[
    "Gran Danes",
    "Dogo de Burdeos",
    "Dogo Argentino",
    "San Bernando",
    "Mastin del Pireno",
    "Mastin Español",
    "Chihuahua",
    "Pastor aleman",
    "Lobero Irlandes",
    "Pitbull"
];
export{razasPerros}
/*
Para esta nueva version de JS, se agrego el bucle for/of que permite
iterar sobre los objetos iterables
*/
//for tradicional
console.log("FOR NORMAL")
for(let indice=0;
    indice<razasPerros.length;
    indice++){
        console.log(razasPerros[indice]);
    }
console.log("..........................................................");
console.log("FOR/OF")
//ahora con un for/of
for(const raza of razasPerros){
    console.log(raza);
}
/*
tambien existe un bucle for/in que itera sobre las llaves del objeto
en el caso de un arreglo estas llaves son los indices.
*/
console.log("..........................................................");
console.log("FOR/IN")
for(const indice in razasPerros){
    console.log(razasPerros[indice]);
}