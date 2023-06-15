import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCategoryProductsComponent } from './mostrar-category-products.component';

describe('MostrarCategoryProductsComponent', () => {
  let component: MostrarCategoryProductsComponent;
  let fixture: ComponentFixture<MostrarCategoryProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarCategoryProductsComponent]
    });
    fixture = TestBed.createComponent(MostrarCategoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
