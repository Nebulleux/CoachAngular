import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coach } from 'src/classes/Coach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  public list_lenght!: number
  constructor(private http: HttpClient) { }

  getCoach() : Observable<Coach[]> 
  {
    return this.http.get<Coach[]>('http://localhost:3000/coach');
  }

  getListLenght()
  {
    this.getCoach().subscribe(coach => { this.list_lenght = coach.length});
  }

  getCoachById(id: number) : Observable<Coach> 
  {
    return this.http.get<Coach>('http://localhost:3000/coach/' + id);
  }

  addCoach(coach: Coach) 
  {
    this.http.post<Coach>('http://localhost:3000/coach/', coach).subscribe(data => {console.log("Ok")});
  }
}
