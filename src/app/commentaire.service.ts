import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from './commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = 'http://localhost:9091';

  constructor(private http: HttpClient) { }
  supprimerCom(id: number): Observable<void> {
    // Utiliser `void` car le serveur ne renvoie probablement pas un nouvel objet Cours lors de la suppression
    return this.http.delete<void>(`${this.apiUrl}/supprimerCom/${id}`);
  }
  getById(id: number): Observable<Commentaire> {
    const url = `${this.apiUrl}/comment/${id}`;
    return this.http.get<Commentaire>(url);
  }
  updateCom(commentaire: Commentaire, id: number): Observable<void> {
    const url = `${this.apiUrl}/ModifierCom/${id}`;
    return this.http.put<void>(url, commentaire);
  }
}
