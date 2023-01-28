import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private giftservice: GifsService) { }

  get historial(){
    return this.giftservice.historial;
  }

  buscar(termino: string){
    this.giftservice.buscargift(termino);
  }
}
