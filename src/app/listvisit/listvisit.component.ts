import { Component } from '@angular/core';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listvisit',
  templateUrl: './listvisit.component.html',
  styleUrls: ['./listvisit.component.css']
})
export class ListvisitComponent {
  private listeCours: any[] = [];
  cours: Cours[] = [];
  selectedCourse: Cours | undefined;
  selectedCourse1: Cours | undefined;

  searchKeyword: string = '';
  constructor(private coursService: CoursService, private router: Router  ,private fb:FormBuilder) {}
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
  inscrire(nomDuCours: string): void {
    console.log('Nom du cours inscrit :', nomDuCours);
    // Ajoutez ici le code pour gérer l'inscription au cours, par exemple, naviguez vers une autre page
    this.router.navigate(['/inscrivisit', nomDuCours]);
  }
  showDetails1(course: Cours): void {
    this.selectedCourse1 = course;
  }
}
