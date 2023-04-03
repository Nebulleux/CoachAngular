import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent {
  constructor(private router: Router) {}

  goToAnotherPage(page: string) {
    this.router.navigate(['/' + page]);
  }
}
