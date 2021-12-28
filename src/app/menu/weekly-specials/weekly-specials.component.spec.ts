import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySpecialsComponent } from './weekly-specials.component';

describe('WeeklySpecialsComponent', () => {
  let component: WeeklySpecialsComponent;
  let fixture: ComponentFixture<WeeklySpecialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklySpecialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
