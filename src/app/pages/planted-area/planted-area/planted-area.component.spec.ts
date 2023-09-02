import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantedAreaComponent } from './planted-area.component';

describe('PlatedAreaComponent', () => {
  let component: PlantedAreaComponent;
  let fixture: ComponentFixture<PlantedAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantedAreaComponent]
    });
    fixture = TestBed.createComponent(PlantedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
