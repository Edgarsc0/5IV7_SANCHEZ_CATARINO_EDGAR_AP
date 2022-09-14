/**
 * vamos a crear un carrusel de imagen que se consume
 * por medio de una api
 */
window.onload=()=>{
    //img
    const imagenes=[
        //aqui van rutas img
    ]
    const display=document.getElementById("display");
    const botones=Array.from(document.getElementsByTagName("boton"));
    const campoMensaje=document.getElementById("mensaje");
    const mensajes=document.getElementById("mensajes");
    const colorValor=document.getElementById("colorValor");
    let imagenActual=0;
    const imagenAnterior=()=>{
        if(imagenActual>0){
            imagenActual--;
        }else{
            imagenActual=imagenes.length+1;
        }
        display.src=imagenes[imagenActual];
    }
    const imagenSiguiente=()=>{
        //accedemos a la imagen dentro del arreglo con su indice
        //cuando es la ultima regresamos a la primera 
        if(imagenActual<imagenes.length-1){
            imagenActual++;

        }else{
            imagenActual=0;
        }
        display.src=imagenes[imagenActual];
        const pantallaCompleta=()=>{
            /**
             * Otra forma para cuando se solicita la pantalla completa
             * nos devuelva una promesa
             * por si queremos manejar el elemento de pantalla completa
             * 
             */
            display.requestFullscreen();
        };
        const mostrarMensaje=()=>{
            /**
             * otra de las cosas que se pueden hacer es modificar 
             * el html interno de un elemento para agregar de forma dinamica
             * nuevos elementos
             */
            mensajes.innerHTML+=`${campoMensaje.value}<br/>`;
            campoMensaje.value="";
        };
        const cambiarColor=()=>{
            colorValor.click();
        }
        const inicializar=()=>{
            botones.find(boton=>boton.id==="siguiente").onclick=imagenSiguiente;
            botones.find(boton=>boton.id==="anterior").onclick=imagenAnterior;
            botones.find(boton=>boton.id==="pantallaCompleta").onclick=pantallaCompleta;
            botones.find(boton=>boton.id==="mostrarMensaje").onclick=mostrarMensaje;
            botones.find(boton=>boton.id==="cambiarColor").onclick=cambiarColor;
            colorValor.onchange=()=>{
                mensajes.style.color=colorValor.value;
            };
            display.src=imagenes[0];
        };
        inicializar();
    }
}