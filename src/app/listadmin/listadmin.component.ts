import { Component ,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent implements OnInit {
  user:any;
  com:any;
  constructor(private listcour:AuthService,private router:Router){}
ngOnInit():void{
this.listget();
}
  listget(){
    this.listcour.listadmin().subscribe(data=>{
      
      console.log("data",data);
      this.user=data;
    })
  }
supprimeruser(id: number): void {
    if (id === undefined || id === null) {
      console.error("L'ID du cours est indéfini.");
      return;
    }
    console.log('ID du cours à supprimer :', id);
    this.listcour.supprimerVisiteur(id).subscribe(
      () => {
        window.location.reload();

         // Replace console.log with alert
        // Effectuer d'autres actions si nécessaire
      },
      error => {
        console.error('Échec de la suppression du cours :', error);
  
        if (error instanceof HttpErrorResponse) {
          try {
            const errorObject = JSON.parse(error.error);
            console.log('Contenu de l\'erreur :', errorObject);
          } catch (jsonError) {
            console.log('Erreur lors de l\'analyse JSON de la réponse.');
            console.log('Réponse brute du serveur :', error.error);
          }
        }
      }
    );
  }
  redirigerVersPageModifier(id: number): void {
    // Utilisez le service Router pour naviguer vers la page de modification
    this.router.navigate(['/modifieruser', id]);
  }
  retoura(){
    this.router.navigate(['/List'])
  }
}
