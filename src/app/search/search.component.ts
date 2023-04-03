import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';
import { Observable } from 'rxjs';
import { Coach } from 'src/classes/Coach';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selectedCategory?: string;
  coaches$?: Observable<Coach[]>;

  constructor(private coachService: CoachService) {}

  ngOnInit() {}

  onSubmit() {
    this.coaches$ = this.coachService.getCoachByCategory(this.selectedCategory!);
  }
}