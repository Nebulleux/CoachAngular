import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachListComponent } from './coach-list/coach-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginCoachComponent } from './login-coach/login-coach.component';
import { RegisterCoachComponent } from './register-coach/register-coach.component';
import { AuthGuard } from './auth.guard';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'auth/login', component: LoginCoachComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'register', component: RegisterCoachComponent},
  { path: 'coaches', component: CoachListComponent},
  { path: 'coach-categorie', component: CoachListComponent},
  { path: 'add-post', component: AddPostComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
