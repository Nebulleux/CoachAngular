import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCuisineComponent } from './coach-cuisine.component';

describe('CoachCuisineComponent', () => {
  let component: CoachCuisineComponent;
  let fixture: ComponentFixture<CoachCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachCuisineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
