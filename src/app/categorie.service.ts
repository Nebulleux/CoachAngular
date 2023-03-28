import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/classes/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  list_lenght! : number
  constructor(private http: HttpClient) { }

  getCategorie() : Observable<Categorie[]> 
  {
    return this.http.get<Categorie[]>('http://localhost:3000/categorie');
  }

  getListLenght()
  {
    this.getCategorie().subscribe(cat => { this.list_lenght = cat.length});
  }
}