import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from 'src/classes/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public list_lenght!: number
  constructor(private http: HttpClient) { }

  getPost() : Observable<Post[]> 
  {
    return this.http.get<Post[]>('http://localhost:3000/post');
  }

  getListLenght()
  {
    this.getPost().subscribe(post => { this.list_lenght = post.length});
  }

  getPostById(id: number) : Observable<Post> 
  {
    return this.http.get<Post>('http://localhost:3000/post/' + id);
  }

  addPost(coach: Post) 
  {
    this.http.post<Post>('http://localhost:3000/post/', coach).subscribe(data => {console.log("Ok")});
  }

  getPostByCoachId(coachId: number): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts')
      .pipe(
        map((coaches: Post[]) => coaches.filter((posts: { id: number; }) => posts.id ==  coachId ))
      );
  }
}
