import { Component } from '@angular/core';
import {Persona} from '../persona/persona';
import {ServicioPersonaService} from '../persona/servicio-persona.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[ServicioPersonaService]


})

export class AppComponent  {
  name = 'Angular';
  mensaje:String;
  constructor(private saludo: ServicioPersonaService){
    this.mensaje =this.saludo.saluda();
  }
}
