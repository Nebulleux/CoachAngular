import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-coach',
  templateUrl: './login-coach.component.html',
  styleUrls: ['./login-coach.component.css']
})
export class LoginCoachComponent {

  public mdp: string;
  public login: string;
  constructor(private router: Router, private auth: AuthService) {
    this.mdp = "";
    this.login = "";
  }
  
  onLogin() {
    console.log(this.mdp)
    console.log(this.login)

    const result = this.auth.login(this.mdp, this.login);
    console.log(result)
    if(result)
    {
      this.router.navigateByUrl('/');
    }
  }
}
