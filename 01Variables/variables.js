/*
Manejo de variables en JS ES6
var
let
const
*/
if(true){
    //se declara por primera vez x
    //var x="x";
    let x="x";
    //se imprime el valor de la variable
    //este contendra el caracter
    console.log(x);
}
/*
la variable x sigue eistiendo y conserva su valor.
*/

/*
la variable x ya no existe ya que pertenece al bloque delimitado por las llaves del if
por lo que la siguiente line provica un referenceError
*/
console.log(x);
//la variable x se redeclara con el valor "y"
//var x="y";
var x="y";
//la variable x ahora vale "y"
/*
como el tipo de variable de x es constante
la siguiente linea de codigo provoca un error
TypeError, para el comportamiento deseado, por lo tanto
el tipo de variable deberia ser LET
*/
console.log(x);
x="z";
//ahora la variable vale "z"
console.log(x);
