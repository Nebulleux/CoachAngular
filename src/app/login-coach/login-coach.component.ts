import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-coach',
  templateUrl: './login-coach.component.html',
  styleUrls: ['./login-coach.component.css']
})
export class LoginCoachComponent {

  
  constructor(private router: Router, private auth: AuthService) {}
  
  onLogin() {
    this.auth.login();
    this.router.navigateByUrl('/auth/login');
  }
}
