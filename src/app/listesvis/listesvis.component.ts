import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-listesvis',
  templateUrl: './listesvis.component.html',
  styleUrls: ['./listesvis.component.css']
})
export class ListesvisComponent implements OnInit {
  private listeCours: any[] = [];
  cours: Cours[] = [];
  //cours:any;
  user:any;
  selectedCourse1:any;
  constructor(private listcour:AuthService,private router:Router ,private toastr: ToastrService,private cousservice:CoursService){}
  ngOnInit(): void {
    this.listget();
    //this.list();
  }
    listget(){
      this.listcour.listvis().subscribe(data=>{
        console.log("data",data);
        this.user=data;
      })
    }
    list(){
      this.cousservice.getListeCours().subscribe(data=>{
        console.log("data",data);
        this.cours=data;
      })
    }
    accepterUtilisateur(utilisateur: any): void {
      console.log('Utilisateur accepté :', utilisateur);
      this.toastr.success('Votre demande a été acceptée.', 'Succès');
    
      // Assurez-vous que l'objet utilisateur a la propriété nomDuCours définie
      if (utilisateur && utilisateur.nomDuCours) {
        this.selectedCourse1 = { nomDuCours: utilisateur.nomDuCours };
      } else {
        // Gérez le cas où la propriété nomDuCours n'est pas définie
        console.error('La propriété nomDuCours n\'est pas définie pour cet utilisateur.');
      }
    }
    refuserUtilisateur(utilisateur: any): void {
      console.log('Utilisateur refusé :', utilisateur);
      this.toastr.error('Votre demande a été refusée.', 'Erreur');
    }
    retoura(){
      this.router.navigate(['/List'])
    }
    // Exemple dans votre composant TypeScript
getCoursNom(idCours: number): string {
  // Trouver le cours dans la liste 'cours' en fonction de l'identifiant
  const coursTrouve = this.cours.find(c => c.id === idCours);

  // Retourner le nom du cours s'il est trouvé, sinon une chaîne vide
  return coursTrouve ? coursTrouve.nomDuCours : '';
}

}
