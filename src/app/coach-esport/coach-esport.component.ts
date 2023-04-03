import { Component } from '@angular/core';
import { Coach } from 'src/classes/Coach';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-coach-esport',
  templateUrl: './coach-esport.component.html',
  styleUrls: ['./coach-esport.component.css']
})
export class CoachEsportComponent {

  coachList : Coach[] = [];

  constructor(private service: CoachService) { }

  ngOnInit(): void {
    this.service.getCoachByCategory('esport').subscribe(data => {
      this.coachList = data
    });
  }
  
}
