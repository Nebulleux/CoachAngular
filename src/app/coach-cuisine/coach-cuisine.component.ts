import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/classes/Coach';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-coach-cuisine',
  templateUrl: './coach-cuisine.component.html',
  styleUrls: ['./coach-cuisine.component.css']
})
export class CoachCuisineComponent {
  coachList : Coach[] = [];

  constructor(private service: CoachService) { }

  ngOnInit(): void {
    this.service.getCoachByCategory('cuisine').subscribe(data => {
      this.coachList = data
    });
  }
  
}
