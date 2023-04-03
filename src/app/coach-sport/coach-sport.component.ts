import { Component } from '@angular/core';
import { Coach } from 'src/classes/Coach';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-coach-sport',
  templateUrl: './coach-sport.component.html',
  styleUrls: ['./coach-sport.component.css']
})
export class CoachSportComponent {

  coachList : Coach[] = [];

  constructor(private service: CoachService) { }

  ngOnInit(): void {
    this.service.getCoachByCategory('sport').subscribe(data => {
      this.coachList = data
    });
  }
  
}
