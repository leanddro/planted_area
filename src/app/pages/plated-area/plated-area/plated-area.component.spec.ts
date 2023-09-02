import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatedAreaComponent } from './plated-area.component';

describe('PlatedAreaComponent', () => {
  let component: PlatedAreaComponent;
  let fixture: ComponentFixture<PlatedAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatedAreaComponent]
    });
    fixture = TestBed.createComponent(PlatedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
