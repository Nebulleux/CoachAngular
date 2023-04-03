import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachBricolageComponent } from './coach-bricolage.component';

describe('CoachBricolageComponent', () => {
  let component: CoachBricolageComponent;
  let fixture: ComponentFixture<CoachBricolageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachBricolageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachBricolageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
