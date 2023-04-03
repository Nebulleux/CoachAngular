import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coach } from 'src/classes/Coach';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Coach | undefined;
  private token!: boolean;
  constructor(private http : HttpClient) { }

  

  login(password : string, login : string) : boolean {
    this.token = false;
    this.http.get<Coach[]>('http://localhost:3000/coach')
    .subscribe(res => { 
      this.user = res.find(
        (a: Coach) => a.password === password
      )
    });
    console.log(this.user)
    if(this.user == undefined)
    {
      this.token = false;
      return false;
    } 
    else
    {
      this.token = true;
      return true;
    }
  }

  getToken(): boolean {
    return this.token;
  }
}
