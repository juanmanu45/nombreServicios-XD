export class Persona {
  nombre:string;
  apellido:String;
  constructor(nombre:string,apellido:string){
    this.nombre=nombre;
    this.apellido=apellido;
  }
  obtenerNombre():String{
    return this.nombre;
  }
  obtenerApellido():String{
    return this.apellido;


  }


}