import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/classes/Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-coach-details',
  templateUrl: './coach-details.component.html',
  styleUrls: ['./coach-details.component.css']
})
export class CoachDetailsComponent {
  postList : Post[] = [];
  enseignantId!: string|null;

  constructor(private route: ActivatedRoute, private router: Router, private service : PostService) {  }


  ngOnInit(): void {
    this.enseignantId = this.route.snapshot.paramMap.get('id');
    if (this.enseignantId) {
      this.service.getPostByCoachId(+this.enseignantId).subscribe( data => {
        this.postList = data
      });
    }

  }

}
