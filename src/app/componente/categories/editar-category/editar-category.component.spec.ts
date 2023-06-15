import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCategoryComponent } from './editar-category.component';

describe('EditarCategoryComponent', () => {
  let component: EditarCategoryComponent;
  let fixture: ComponentFixture<EditarCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCategoryComponent]
    });
    fixture = TestBed.createComponent(EditarCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
