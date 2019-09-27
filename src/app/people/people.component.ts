import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  nombre: string;
  apellido: string;
  saludo: string;

  constructor() {}

  ngOnInit() {}

  saludar(): void {
    this.saludo = "hola";
  }
}
