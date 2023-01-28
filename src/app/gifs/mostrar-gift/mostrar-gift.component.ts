import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-mostrar-gift',
  templateUrl: './mostrar-gift.component.html'
})
export class MostrarGiftComponent {

  constructor(private gitfservice:GifsService) { }

  get resultados(){
    return this.gitfservice.resultados;
  }

}
