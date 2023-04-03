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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { CoachSportComponent } from './coach-sport/coach-sport.component';
import { CoachEsportComponent } from './coach-esport/coach-esport.component';
import { CoachCuisineComponent } from './coach-cuisine/coach-cuisine.component';
import { CoachBricolageComponent } from './coach-bricolage/coach-bricolage.component';

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
    CoachCategorieListComponent,
    AddPostComponent,
    CoachSportComponent,
    CoachEsportComponent,
    CoachCuisineComponent,
    CoachBricolageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
