import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, ocultar: boolean = true): string {
    /*let cadenaOculta = '';
    if( ocultar ){
      for( let caracter = 0;  caracter < value.length; caracter ++)
        cadenaOculta += '*';
    }
    else{
      cadenaOculta = value;
    }
    return cadenaOculta;*/
    return ( ocultar )? '*'.repeat(value.length): value;
  }

}
