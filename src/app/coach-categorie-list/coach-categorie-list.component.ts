import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from 'src/classes/Coach';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-coach-categorie-list',
  templateUrl: './coach-categorie-list.component.html',
  styleUrls: ['./coach-categorie-list.component.css']
})
export class CoachCategorieListComponent implements OnInit {

  coachList !: Coach[];

  constructor(
    private router: Router, 
    private service: CoachService) { }

  goToAnotherPage(page: string) {
    this.router.navigate(['/' + page]);
  }

  ngOnInit(): void {
    this.service.getCoachByCategory('sport').subscribe(data => {
      this.coachList = data
    });
  }
}
