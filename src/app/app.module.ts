import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PeopleComponent } from './people/people.component';
import { CalculadoraComponent } from './ejer2/calculadora/calculadora.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PeopleComponent, CalculadoraComponent ],
  bootstrap:    [ AppComponent ],
  
  
})
export class AppModule { }
