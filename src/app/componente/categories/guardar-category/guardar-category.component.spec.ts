import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarCategoryComponent } from './guardar-category.component';

describe('GuardarCategoryComponent', () => {
  let component: GuardarCategoryComponent;
  let fixture: ComponentFixture<GuardarCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarCategoryComponent]
    });
    fixture = TestBed.createComponent(GuardarCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
