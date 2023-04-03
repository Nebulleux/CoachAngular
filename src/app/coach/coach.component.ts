import { Component, Input, OnInit } from '@angular/core';
import { Coach } from 'src/classes/Coach';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  @Input() coach! : Coach;

  constructor(private service: CoachService) { }
 
  ngOnInit(): void {
    
  }

  goToCoach(id : number) : void {
    this.service.goToURL(id);
  }

}
