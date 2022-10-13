import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroeBorrado:string = "";

  heroes: string[] =["BatMan","IronMan","Thor","Invencible"];

  borrarHeroe():void{

    console.log("Borrando...");
    
    this.heroeBorrado = this.heroes.pop() || "" ;

  }

}
