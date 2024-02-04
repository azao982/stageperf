import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  selectedFile: File;
  imageSrc: any;
  isButtonDisabled = true;
  coursForm:FormGroup;
  constructor(private coursService:CoursService, private formBuilder:FormBuilder, private router:Router,private http: HttpClient) { }
  onAjouter() {
    this.coursService.addCours(this.coursForm.value).subscribe(data => console.log(data));
    // pour initialiser le formulaire de zéro 
    this.coursForm.reset();
    // pour actualiser la page 
    this.router.navigate(['/List']);
  }

  ngOnInit(): void {
    this.coursForm = this.formBuilder.group({
      nomDuCours: ['', Validators.required],
      description: ['', Validators.required],
      coursFormatPdf: [null, Validators.required],
      coursFormatVideo: [null, Validators.required],
      nomProfesseur: ['', Validators.required],
      imageSrc: ['']
    });

    this.coursForm.valueChanges.subscribe(() => {
      // Mettez à jour l'état du bouton en fonction de la validité du formulaire
      this.isButtonDisabled = this.coursForm.invalid;
    });
  }

  retour() {
    this.router.navigate(['/List'])
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:9091/upload', formData)
      .subscribe(response => {
        console.log('File uploaded successfully', response);
      });
  }
}