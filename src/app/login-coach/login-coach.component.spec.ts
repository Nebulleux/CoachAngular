import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCoachComponent } from './login-coach.component';

describe('LoginCoachComponent', () => {
  let component: LoginCoachComponent;
  let fixture: ComponentFixture<LoginCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
