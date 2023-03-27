import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCategorieListComponent } from './coach-categorie-list.component';

describe('CoachCategorieListComponent', () => {
  let component: CoachCategorieListComponent;
  let fixture: ComponentFixture<CoachCategorieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachCategorieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachCategorieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
