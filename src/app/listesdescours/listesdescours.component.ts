import { Component, Input, OnInit } from '@angular/core';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { CommentaireService } from '../commentaire.service';

@Component({
  selector: 'app-listesdescours',
  templateUrl: './listesdescours.component.html',
  styleUrls: ['./listesdescours.component.css']
})

export class ListesdescoursComponent implements OnInit{

  com:any;
  private listeCours: any[] = [];
  cours: Cours[] = [];
  selectedCourse: Cours | undefined;
  searchKeyword: string = '';
  searchResults: Cours[] = [];
  constructor(private coursService: CoursService, private router: Router ,private listcour:AuthService,private commentaireService:CommentaireService ) {}
  ngOnInit(): void {
    this.getCours();

    this.getcom();
  }
  private getCours(): void {
    this.coursService.getListeCours().subscribe(data => {
      this.cours = data;
    });
  }
  showDetails(course: Cours): void {
    this.selectedCourse = course;
  }
  searchCours(): void {
    if (!this.searchKeyword) {
      // Show alert if search input is empty
      alert('Entrez cours à rechercher !! ');
      return;
    }
  
    this.coursService.searchCours(this.searchKeyword)
      .subscribe(
        (result: Cours[]) => {
          console.log(result);
          this.searchResults = result;
  
          if (result.length === 0) {
            // Show alert when no results are found
            alert("Cours n'existe pas");
          }
        },
  
        (error) => {
          console.error(error);
          // Handle error if necessary
        }
      );
  }
  supprimerCours(id: number): void {
    if (id == null) {
      console.error("L'ID du cours est indéfini.");
      return;
    }
  
    // Utiliser window.confirm pour demander à l'administrateur
    const confirmation = window.confirm('Voulez-vous vraiment supprimer ce cours ?');
  
    // Si l'administrateur a confirmé
    if (confirmation) {
      console.log('ID du cours à supprimer :', id);
  
      this.coursService.supprimerCours(id).subscribe(
        () => {
          // Ajouter une alerte pour indiquer que la suppression a réussi
          alert('Le cours a été supprimé avec succès.');
  
          // Recharger la page après la suppression
          window.location.reload();
        },
        (erreur) => {
          console.error('Erreur lors de la suppression du cours :', erreur);
          alert('Une erreur s\'est produite lors de la suppression du cours.');
        }
      );
    } else {
      // Si l'administrateur a annulé
      console.log('La suppression du cours a été annulée.');
    }
  }
  
  redirigerVersPageModifier(coursId: number): void {
    // Utilisez le service Router pour naviguer vers la page de modification
    this.router.navigate(['/modifier', coursId]);
  }
  redirigerVersPageajoute() {
    // Utilisez le service Router pour naviguer vers la page de modification
    this.router.navigate(['/ajout']);
  }
getcom(){
  this.listcour.affichercom().subscribe(data => {
    console.log("data",data);
    this.com=data
  })
}

supprimerCommentaire(id: number): void {
  if (id == null) {
    console.error("L'ID du cours est indéfini.");
    return;
  }
  // Utiliser window.confirm pour demander à l'administrateur
  const confirmation = window.confirm('Voulez-vous vraiment supprimer ce cours ?');
  // Si l'administrateur a confirmé
  if (confirmation) {
    console.log('ID du cours à supprimer :', id);

    this.commentaireService.supprimerCom(id).subscribe(
      () => {
        // Ajouter une alerte pour indiquer que la suppression a réussi
        alert('Le cours a été supprimé avec succès.');

        // Recharger la page après la suppression
        window.location.reload();
      },
      (erreur) => {
        console.error('Erreur lors de la suppression du cours :', erreur);
        alert('Une erreur s\'est produite lors de la suppression du cours.');
      }
    );
  } else {
    // Si l'administrateur a annulé
    console.log('La suppression du cours a été annulée.');
  }
}
modifierCommentaire(id: number): void {
    // Utilisez le service Router pour naviguer vers la page de modification
    this.router.navigate(['/modifiercomm',id]);
  }
  retoura(){
    this.router.navigate(['/listesvis'])
  }
  retour(){
    this.router.navigate(['/listadmin'])
  }
}
