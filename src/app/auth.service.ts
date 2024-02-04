import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from './Personne';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:9091';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, user);
  }
  login(credentials: any): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, credentials);
  }
  listadmin(){
    const url = `${this.apiUrl}/visiteurs`;
    return this.http.get(url);
  }
  supprimerVisiteur(id:number){
    return this.http.delete<void>(`${this.apiUrl}/visiteur/${id}`);
  }
  
  getById(id: number): Observable<Personne> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Personne>(url);
  }

  updateVisiteur(personne: Personne, id: number): Observable<void> {
    const url = `${this.apiUrl}/ModifierVisiteur/${id}`;
    return this.http.put<void>(url, personne);
  }
  /*ajoutercom(user: any): Observable<any> {
    const url = `${this.apiUrl}/ajouterCom`;
    return this.http.post(url, user);
  }*/
  ajoutercom(user:any){
    return this.http.post("http://localhost:9091/ajouterCom",user)
  }
affichercom(){
  return this.http.get("http://localhost:9091/ConsulterCom");
}
registerAdmin(user: any): Observable<any> {
  const url = `${this.apiUrl}/register/admin`;
  return this.http.post(url, user);
}
regist(user: any): Observable<any> {
  const url = `${this.apiUrl}/api/regist`;
  return this.http.post(url, user);
}
listvis(){
  const url = `${this.apiUrl}/api/ConsulterVisit`;
  return this.http.get(url);
}
}

