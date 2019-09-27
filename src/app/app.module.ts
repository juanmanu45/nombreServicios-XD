import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PeopleComponent } from './people/people.component';
import { CalculadoraService } from './people/Servicios/calculadora.service';
import { RestaService } from './people/Servicios/resta.service';
import { MultiService } from './people/Servicios/multi.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PeopleComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CalculadoraService, RestaService, MultiService]
  
})
export class AppModule { }
