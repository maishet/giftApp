import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGiftComponent } from './mostrar-gift.component';

describe('MostrarGiftComponent', () => {
  let component: MostrarGiftComponent;
  let fixture: ComponentFixture<MostrarGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarGiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
