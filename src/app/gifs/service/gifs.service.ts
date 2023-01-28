import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private key: string = 'fB8HyUQgG9TVmKm68ncRWPTgssguQcpk';

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  buscargift( query: string){
      
      query = query.trim().toLocaleLowerCase();
  
      if( !this._historial.includes( query )){ //si no existe
        this._historial.unshift( query ); //agregar al inicio
        //cortar a 10 elementos
        this._historial = this._historial.splice(0,10);
      }
  
      console.log(this._historial);
  }

  constructor() { }
}
