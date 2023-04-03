import { Component } from '@angular/core';
import { Coach } from 'src/classes/Coach';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-coach-bricolage',
  templateUrl: './coach-bricolage.component.html',
  styleUrls: ['./coach-bricolage.component.css']
})
export class CoachBricolageComponent {
  coachList : Coach[] = [];

  constructor(private service: CoachService) { }

  ngOnInit(): void {
    this.service.getCoachByCategory('bricolage').subscribe(data => {
      this.coachList = data
    });
  }

}
