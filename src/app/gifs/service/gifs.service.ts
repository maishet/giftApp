import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, SearchGiftResponse } from '../interfaces/gift.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _URL: string = 'https://api.giphy.com/v1/gifs';
  private _key: string = 'fB8HyUQgG9TVmKm68ncRWPTgssguQcpk';
  private _historial: string[] = [];
  // public resultados: any[] = []; //no se sabe que tipo de dato va a tener
  public resultados: Datum[] = [];

  get historial(){
    return [...this._historial];
  }

  buscargift( query: string){
      
      query = query.trim().toLocaleLowerCase();
  
      if( !this._historial.includes( query )){ //si no existe
        this._historial.unshift( query ); //agregar al inicio
        //cortar a 10 elementos
        this._historial = this._historial.splice(0,10);

        localStorage.setItem('historial', JSON.stringify(this._historial)); //guardar en el localstorage el historial de busqueda
      }

      //como los querys de postman
      const params = new HttpParams()
        .set('api_key', this._key)
        .set('limit', '15')
        .set('q', query);

      this.http.get<SearchGiftResponse>(`${this._URL}/search`, { params })
        .subscribe( (resp) => {
          this.resultados = resp.data;
          localStorage.setItem('resultados', JSON.stringify(this.resultados)); //guardar en el localstorage las img historial de busqueda
        })
        //retornando un observable
      
  }

  constructor(private http:HttpClient) {
    
    this._historial = JSON.parse( localStorage.getItem('historial')! ) || []; //si no existe el historial, se crea vacio
    this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || []; //si no existe el historial, se crea vacio
   }
}
