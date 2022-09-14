class FiguraGeometrica{
    constructor(){
        //puede o no tener implementacion
    }
    area(){
        
    }
    perimetro(){
        console.log("Este metodo calcula el perimetro de una fuigura");
    }
}
//herencia a la clase
class Rectangulo extends FiguraGeometrica{
    constructor(base,altura){
        //hacemmos el contructor del padre
        super();
        this._base=base;
        this._altura=altura;
        this._area=null;
        this._perimetro=null;
        this._actualizarArea=false;
        this._actualizarPerimetro=false;
    }
    calcularArea(){
        return this._base*this._altura;
    }
    calcularPerimetro(){
        return 2*this._base+2*this._base;
    }
    set base(base){
        this._base=base;
        this._actualizarArea=true;
        this._actualizarPerimetro=true;
    }
    set altura(altura){
        this._altura=altura;
        this._actualizarArea=true;
        this._actualizarPerimetro=true;
    }
    get area(){
        if(this._actualizarArea || this._area){
            this._area=this.calcularArea();
        }
        return this._area;
    }
    get perimetro(){
        if(this._actualizarPerimetro || this._perimetro){
            this._perimetro=this.calcularPerimetro();
        }
        return this._perimetro;
    }
}
const objetoRectangulo=new Rectangulo(8,6);
console.log(objetoRectangulo.calcularArea());
objetoRectangulo.base=4;
objetoRectangulo.altura=4;
console.log(objetoRectangulo.area);


