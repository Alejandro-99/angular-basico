import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: "./contador.component.html"
})
export class ContadorComponent {
    titulo: string = 'Contador';
    numero: number = 10;
    base: number = 5;
    acumular(accion:number){
        if(accion == 1)
        this.numero +=this.base;
        else
        this.numero -=this.base;
    } 
}