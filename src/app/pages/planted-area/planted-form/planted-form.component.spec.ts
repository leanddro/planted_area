import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantedFormComponent } from './planted-form.component';

describe('PlatedFormComponent', () => {
  let component: PlantedFormComponent;
  let fixture: ComponentFixture<PlantedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantedFormComponent]
    });
    fixture = TestBed.createComponent(PlantedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
