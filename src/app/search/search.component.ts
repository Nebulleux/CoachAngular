import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coach } from 'src/classes/Coach';
import { map, filter, defaultIfEmpty } from 'rxjs/operators';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selectedCategory = '';
  coaches$: Observable<Coach[]> = of([]);

  constructor(private coachService: CoachService) {}

  ngOnInit() {}

  onSubmit() {
    this.coaches$ = this.coachService.getCoachByCategory(this.selectedCategory).pipe(
      map((coaches: Coach[]) => coaches.filter((coach: { categorie: string; }) => coach.categorie === this.selectedCategory)),
      defaultIfEmpty([]) 
    );
  }
}