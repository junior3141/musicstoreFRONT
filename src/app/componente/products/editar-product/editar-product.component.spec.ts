import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductComponent } from './editar-product.component';

describe('EditarProductComponent', () => {
  let component: EditarProductComponent;
  let fixture: ComponentFixture<EditarProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarProductComponent]
    });
    fixture = TestBed.createComponent(EditarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
