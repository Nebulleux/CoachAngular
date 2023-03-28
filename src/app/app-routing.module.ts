import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { CoachListComponent } from './coach-list/coach-list.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterCoachComponent } from './register-coach/register-coach.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'register', component: RegisterCoachComponent},
  { path: 'coaches', component: CoachListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
