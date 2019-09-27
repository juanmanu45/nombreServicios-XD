import { Injectable } from '@angular/core';
import {Persona} from './persona'
@Injectable()
export class ServicioPersonaService {
  persona:Persona;
  
  
  constructor() {
    this.persona = new Persona("Joe","Arrollo");



   }
   saluda():String{
     return this.persona.nombre+" "+this.persona.apellido;
   }

}