import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftPageComponent } from './gift-page/gift-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MostrarGiftComponent } from './mostrar-gift/mostrar-gift.component';



@NgModule({
  declarations: [
    GiftPageComponent,
    BusquedaComponent,
    MostrarGiftComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GiftPageComponent
  ]
})
export class GifsModule { }
