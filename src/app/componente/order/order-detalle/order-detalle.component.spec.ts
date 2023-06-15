import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetalleComponent } from './order-detalle.component';

describe('OrderDetalleComponent', () => {
  let component: OrderDetalleComponent;
  let fixture: ComponentFixture<OrderDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetalleComponent]
    });
    fixture = TestBed.createComponent(OrderDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
