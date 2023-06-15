import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCategoryComponent } from './mostrar-category.component';

describe('MostrarCategoryComponent', () => {
  let component: MostrarCategoryComponent;
  let fixture: ComponentFixture<MostrarCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarCategoryComponent]
    });
    fixture = TestBed.createComponent(MostrarCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
