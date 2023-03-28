import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CoachComponent } from './coach/coach.component';
import { CoachListComponent } from './coach-list/coach-list.component';
import { ContactComponent } from './contact/contact.component';
import { LoginCoachComponent } from './login-coach/login-coach.component';
import { RegisterCoachComponent } from './register-coach/register-coach.component';
import { CoachCategorieListComponent } from './coach-categorie-list/coach-categorie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CoachComponent,
    CoachListComponent,
    ContactComponent,
    LoginCoachComponent,
    RegisterCoachComponent,
    CoachCategorieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
