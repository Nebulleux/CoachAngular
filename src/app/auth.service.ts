import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coach } from 'src/classes/Coach';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Coach | undefined;
  private token!: string;
  constructor(private http : HttpClient) { }

  

  login(password : string, login : string) : boolean {
    this.token = 'MyFakeToken';
    this.http.get<Coach[]>('http://localhost:3000/coach')
    .subscribe(res => { 
      this.user = res.find(
        (a: Coach) => a.password === password
      )
    });
    console.log(this.user)
    if(this.user == undefined)
    {
      return false;
    } 
    else
    {
      return true;
    }
  }

  getToken(): string {
    return this.token;
  }
}
