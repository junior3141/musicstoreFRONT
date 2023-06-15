import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarProductComponent } from './guardar-product.component';

describe('GuardarProductComponent', () => {
  let component: GuardarProductComponent;
  let fixture: ComponentFixture<GuardarProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarProductComponent]
    });
    fixture = TestBed.createComponent(GuardarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
