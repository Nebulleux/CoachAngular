import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachSportComponent } from './coach-sport.component';

describe('CoachSportComponent', () => {
  let component: CoachSportComponent;
  let fixture: ComponentFixture<CoachSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachSportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
