import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cours } from './cours';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://localhost:9091/api/cours';

  constructor(private http: HttpClient) { }

  addCours(cours: Cours): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ajouterCours`, cours);
}

  getListeCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(`${this.apiUrl}/ConsulterCours`);
  }

  searchCours(keyword: string): Observable<Cours[]> {
    return this.http.get<Cours[]>(`${this.apiUrl}/SearchCours?keyword=${keyword}`);
  }

  // Assurez-vous que cour.id est défini avant d'appeler supprimerCours
  supprimerCours(coursId: number): Observable<void> {
    // Utiliser `void` car le serveur ne renvoie probablement pas un nouvel objet Cours lors de la suppression
    return this.http.delete<void>(`${this.apiUrl}/supprimerCours/${coursId}`);
  }

  getById(id: number): Observable<Cours> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cours>(url);
  }

  updateCours(cours: Cours, id: number): Observable<void> {
    const url = `${this.apiUrl}/ModifierCours/${id}`;
    return this.http.put<void>(url, cours);
  }
}
