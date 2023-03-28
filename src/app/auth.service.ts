import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coach } from 'src/classes/Coach';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private token!: string;
  constructor(private http : HttpClient) { }

  

  login() {
    this.token = 'MyFakeToken';
    this.http.get<Coach[]>('http://localhost:3000/coach')
    .subscribe(res => { const user = res.find((a: Coach)=>{ a.password == this.token && a.login == this.token })});
  }

  getToken(): string {
    return this.token;
  }
}
