import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachEsportComponent } from './coach-esport.component';

describe('CoachEsportComponent', () => {
  let component: CoachEsportComponent;
  let fixture: ComponentFixture<CoachEsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachEsportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachEsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
