import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachListComponent } from './coach-list/coach-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginCoachComponent } from './login-coach/login-coach.component';
import { RegisterCoachComponent } from './register-coach/register-coach.component';
import { AuthGuard } from './auth.guard';
import { AddPostComponent } from './add-post/add-post.component';
import { CoachCategorieListComponent } from './coach-categorie-list/coach-categorie-list.component';
import { CoachCuisineComponent } from './coach-cuisine/coach-cuisine.component';
import { CoachSportComponent } from './coach-sport/coach-sport.component';
import { CoachEsportComponent } from './coach-esport/coach-esport.component';
import { CoachBricolageComponent } from './coach-bricolage/coach-bricolage.component';
import { CoachDetailsComponent } from './coach-details/coach-details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'auth/login', component: LoginCoachComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'register', component: RegisterCoachComponent},
  { path: 'coaches', component: CoachListComponent},
  { path: 'coach-categorie', component: CoachCategorieListComponent},
  { path: 'coach-cuisine', component: CoachCuisineComponent},
  { path: 'coach-sport', component: CoachSportComponent},
  { path: 'coach-esport', component: CoachEsportComponent},
  { path: 'coach-bricolage', component: CoachBricolageComponent},
  { path: 'coach/:id', component: CoachDetailsComponent},
  { path: 'add-post', component: AddPostComponent, canActivate:[AuthGuard]},
  { path: 'recherche', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
