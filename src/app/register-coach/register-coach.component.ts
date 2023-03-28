import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from 'src/classes/Coach';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-register-coach',
  templateUrl: './register-coach.component.html',
  styleUrls: ['./register-coach.component.css']
})
export class RegisterCoachComponent implements OnInit {
  public categories : string[] = [];
  public newCoach: Coach;
  public list_lenght!: number
  constructor(private coachService: CoachService, private router: Router){
    coachService.getListLenght()
    this.newCoach = new Coach(this.coachService.list_lenght + 1, "", "", "", "");
  }

  ngOnInit(): void {}

  addCoachReg()
  {
    this.coachService.getListLenght();
    console.log(this.coachService.list_lenght);
    console.log(this.newCoach);
    this.newCoach.id = this.coachService.list_lenght + 1
    this.coachService.addCoach(this.newCoach);
    this.router.navigate(['/']);
  }
}
