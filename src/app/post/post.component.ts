import { Component, Input } from '@angular/core';
import { Post } from 'src/classes/Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post! : Post;

  constructor() { }
 
  ngOnInit(): void {
    
  }

}
