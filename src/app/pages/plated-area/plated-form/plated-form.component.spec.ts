import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatedFormComponent } from './plated-form.component';

describe('PlatedFormComponent', () => {
  let component: PlatedFormComponent;
  let fixture: ComponentFixture<PlatedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatedFormComponent]
    });
    fixture = TestBed.createComponent(PlatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
