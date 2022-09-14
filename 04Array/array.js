/*
array
forEach itera sobre los elementos del arreglo
no regresa nada.
en la siguiente linea de codigo hace lo mismo que
un bucle pero itera sobre todos los elementos del
arreglo
cada que lo hace ejecuta una funcion
su indice y el arreglo original
*/

import {razasPerros} from 'bucle.js';
razasPerros.forEach((raza,indice,arregloOriginal)=>console.log(raza));
/*
en caso de que no utilicemos alguno de los parametros
lo podemos omitir
*/
razasPerros.forEach((raza)=>console.log(raza));
/*
funcion map
Itera sobre los elementos del arreglo
regresa un arreglo diferente con el que nos muestra
originalmente
*/
const razasPerrosMayusculas=razasPerros.map(
    (raza,indice,arregloOriginal)=>raza.toUpperCase()
);
/*
Hay otras funciones utiles como find
nos permite buscar un elemento dentro del arreglo
si lo encuentra, lo regresa y si no lanza un 'undefined' 
por ejemplo "chihuahua"
*/
if(razasPerros.find((raza,indice,arregloOriginal)=>raza==="Chihuahua")){
    console.log("La raza se encuentra en el arreglo");
}else{
    razasPerros.push("Chihuahua");
}
/*
findIndex
es similar, pero en lugar de regresar el elemento devuelve su indice
si no lo encuentra devuelve -1
esa funcion es particularmente si tenemos que modificar el elemento original 
dentro del arreglo
*/
const indiceChihuahua=razasPerros.findIndex((raza,indice,arregloOriginal)=>raza==="chihuahua");
    if(indiceChihuahua>-1){
        console.log(razasPerros[indiceChihuahua]);
        razasPerros[indiceChihuahua]+="(Raza de perros pequeña )"
        //resultado:
        //chichuahua (Raza de perros pequeña)
        console.log(razasPerros[indiceChihuahua])
    }
    