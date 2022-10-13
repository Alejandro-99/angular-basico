import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  private _personajes: Personaje[] = [
    {
      nombre: "Krilin",
      poder: 1000
    },
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 14000
    }
  ]

  get personajes(): Personaje[] {
    return [...this._personajes]
  }

  constructor() {
    console.log("Service on")
  }

  agregarNuevoPj(pj: Personaje) {
    this._personajes.push(pj);
  }
}
