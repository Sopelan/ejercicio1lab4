import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio1lab4';
  Edad1 : number;
  Edad2 : number;
  Suma : number;
  Promedio : number;
  constructor()
  {
    this.Edad1 = 0;
    this.Edad2 = 0;
    this.Suma = 0;
    this.Promedio = 0;
  }
  Calcular()
  { 
    this.Suma = this.Edad1 + this.Edad2;
    this.Promedio = this.Suma/2;
  }
  Limpiar()
  {
    this.Edad1 = 0;
    this.Edad2 = 0;
    this.Suma = 0;
    this.Promedio = 0;
  }
}
