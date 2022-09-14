/*
Una funcion flecha es una funcion JS
que a diferencia de function
no genera su propio contexto (this)
necesita ser declarada antes de ser usada.
No necesitan usar return o llaves para instrucciones de una sola
linea.
*/
/*
Ejemplo
Hacer una funcion que devuelva la suma de dos numeros.
*/
function funcionNormal(a,b){
    return a+b;
}
console.log(`Funcion suma normal: ${funcionNormal(3,4)}`);

const sumaFuncionFlecha=(a,b)=>a+b;
console.log(`Funcion suma flecha: ${sumaFuncionFlecha(3,4)}`)

const sumaFuncionFlecha1=(a,b)=>{
    return a+b;
};
console.log(`Funcion suma flecha1: ${sumaFuncionFlecha1(3,4)}`);

/*
Si queremos devolver un objeto en una sola linea
con una funcion flecha debemos envolverlo entre parentesis
*/

const sumaFuncionFlecha2=(a,b)=>({
    resultado:a+b
});
console.log(`Funcion suma flecha2: ${sumaFuncionFlecha2(3,4).resultado}`);


/*
Cuando la funcion flehca tiene un solo parametro no es necesario
envolverlo entre parentesis
*/

const cuadradoFuncionFlecha=a=>a**2;
console.log(`Funcion cuadrado flecha ${cuadradoFuncionFlecha(5)}`)