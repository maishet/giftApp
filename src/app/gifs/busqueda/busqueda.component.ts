import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;  //decorador para buscar la referencia local que especifique en el html

  constructor(private giftservice: GifsService){}  

  buscar(): void{

    const valor = this.txtBuscar.nativeElement.value;

    // console.log(valor);

    this.giftservice.buscargift(valor);

    this.txtBuscar.nativeElement.value = '';

  }  
}
