// las siguiente funcion sera usada como callback
const fueExitosa = () =>{
    console.log(`Operacion exitosa ${resultado}`)
}
const fueEronea = () =>{
    console.log(`Operacion fallida ${resultado}`)
}
const miPromesaSiFunciona = new Promise((salioBien, salioMal) => {
    try{
        const divicion = 10 / 5;
        salioBien(divicion);
    }catch(e){
        salioMal(e);
    }
});
miPromesaSiFunciona.then(fueExitosa, fueEronea);
miPromesaSiFunciona.then(fueExitosa).catch(fueEronea);
miPromesaSiFunciona.then((resultado) => {
    console.log(`Operacion fue exitosa ${resultado}`);
}).catch((resultado) => {
    console.log(`Operacion fallida ${resultado}`);
});
const unaFuncionFlechaAsincrona = async() => {
    const resultadoDeLaPromesa = await miPromesaSiFunciona.then((
        resultado) => {
        console.log(`Operacion exitosa ${resultado}`);
        return resultado;
    });
    console.log(`chillo`)
    console.log(resultadoDeLaPromesa);
}
unaFuncionFlechaAsincrona();