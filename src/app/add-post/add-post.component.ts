import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from 'src/classes/Coach';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  public id!: string | null
  public user! : Coach
  constructor(public http : HttpClient, public router : Router, public serviceCoach : CoachService)
  {
    this.id = localStorage.getItem('id');
    if(this.id != null){
      this.serviceCoach.getCoachById(parseInt(this.id)).subscribe(data => {this.user = data})
    }
  }
}
