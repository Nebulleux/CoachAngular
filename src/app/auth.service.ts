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

  

  login() {
    this.token = 'MyFakeToken';
    this.http.get<Coach[]>('http://localhost:3000/coach')
    .subscribe(res => { 
      this.user = res.find(
        (a: Coach)=>{ a.password == this.token && a.login == this.token }
      )
    });
    console.log(this.user);
  }

  getToken(): string {
    return this.token;
  }
}
