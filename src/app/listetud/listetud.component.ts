import { Component } from '@angular/core';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listetud',
  templateUrl: './listetud.component.html',
  styleUrls: ['./listetud.component.css']
})
export class ListetudComponent {
  comForm={commentaire:""}
  private listeCours: any[] = [];
  cours: Cours[] = [];
  selectedCourse: Cours | undefined;
  searchKeyword: string = '';
  searchResults: Cours[] = [];
  constructor(private coursService: CoursService, private router: Router ,private com:AuthService ,private fb:FormBuilder) {}
  ngOnInit(): void {
    /*this.comForm = this.fb.group({
      com: '',
    });*/
    this.getCours();
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
  ajoutercom(){
    this.com.ajoutercom(this.comForm).subscribe((data:any) => console.log(data));
    // pour initialiser le formulaire de zero 
    
    // pour actualiser la page 
   window.location.reload();
   this.router.navigate(['/listetud']);
    }
   
}
