const arregloOrdenadoMayorMenor=[10,9,8,7,6,5,4,3,2,1,0];
console.log(`arregloOrdenadoMayorMenor: ${arregloOrdenadoMayorMenor}`);
const[valorMasGrande]=arregloOrdenadoMayorMenor;
console.log(`valorMasGrande: ${valorMasGrande}`);
const[valorMasGrande1,valorMasGrande2,valorMasGrande3,...restoValores]=arregloOrdenadoMayorMenor;
console.log(`valorMasGrande1,valorMasGrande2,valorMasGrande3,...restoValores: ${valorMasGrande},${valorMasGrande2},${valorMasGrande3},${restoValores}`);
const resultadoDeBusqueda={
    resultados:[
        "resultado 1",
        "resultado 2",
        "resultado 3",
        "resultado 4",
        "resultado 5",
        "resultado 6",
        "resultado 7"
    ],
    total:7,
    mejorCoincidencia: "resultado 3"
};
console.log(`resultadoDeBusqueda: ${resultadoDeBusqueda}`);
const {mejorCoincidencia}=resultadoDeBusqueda;
console.log(`mejorCoincidencia ${mejorCoincidencia}`);
const {mejorCoincidencia: nuevoNombre}=resultadoDeBusqueda;
console.log(`nuevoNombre: ${nuevoNombre}`);
const copiaDelResultadoDeBusqueda={...resultadoDeBusqueda};
console.log(`copiaDelResultadoDeBusqueda: ${copiaDelResultadoDeBusqueda}`);
const copiaDelArregloOrdenado=[...arregloOrdenadoMayorMenor];
console.log(`copiaDelArregloOrdenado: ${copiaDelArregloOrdenado}`);
const copiaDelResultadoDeBusquedaModificada={...resultadoDeBusqueda,cadenaBuscada: "resultado 3"};
console.log(`copiaDelResultadoDeBusquedaModificada: ${copiaDelResultadoDeBusquedaModificada}`);
const copiaDelArregloOrdenadoConNuevoMayor=[11,...arregloOrdenadoMayorMenor];
console.log(`copiaDelArregloOrdenadoConNuevoMayor: ${copiaDelArregloOrdenadoConNuevoMayor}` );
