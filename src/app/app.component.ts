import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre      :string = "Roberto Valdez"
  nombre2     :string = 'roBerTO VaLDeZ'
  
  arreglo = [1,2,3,4,5,6,7,8,9,10]

  PI          : number  = Math.PI;
  porcentaje  : number  = 0.234;
  salario     : number  = 12345.5;
  fecha       : Date    = new Date();
  idioma      : string  = 'es';
  videoUrl    : string  = 'https://www.youtube.com/embed/ZQkqsqXWgvw';
  activar     : boolean = true; 

  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve('llego la informacion')
    }, 4500)
  })

  heroe={
    nombre: 'Roberto',
    clave: 'tito',
    edad: 25,
    direccion:{
      calle: 'Primavera',
      casa: 123
    }
  }

  cambiarEs = ()=>{this.idioma = 'es'}
  cambiarEn = () =>{this.idioma = 'en'}
  cambiarFr = ()=>{this.idioma = 'fr'}

}
