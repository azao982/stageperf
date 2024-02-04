import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailsvis',
  templateUrl: './detailsvis.component.html',
  styleUrls: ['./detailsvis.component.css']
})
export class DetailsvisComponent {
  @Input() selectedCourse1: any;
  registForm: FormGroup;

  constructor(private fb: FormBuilder, private authService:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.registForm = this.fb.group({
      
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email, this.emailDomainValidator]],
      numtel: ['', Validators.required],
      date: ['', Validators.required],
    });
    
  }
  emailDomainValidator(control: FormControl): { [key: string]: boolean } | null {
    const email = control.value as string;
  
    if (email && email.indexOf('@') !== -1) {
      const [, domain] = email.split('@');
      if (domain.indexOf('.') === -1) {
        return { emailDomain: true }; // Validation failed
      }
    }
  
    return null; // Validation passed
  }
  regist(): void {
    this.authService.regist(this.registForm.value).subscribe(
      data => console.log(data));
    this.router.navigate(['/listetud']);
  }
  
  getErrorMessage(fieldName: string): string {
    const control = this.registForm.get(fieldName);
  
    if (control.touched && control.invalid) {
      if (control.hasError('required')) {
        return 'Ce champ est obligatoire';
      } else if (control.hasError('email')) {
        return 'Adresse email invalide';
      } else if (control.hasError('minlength')) {
        return 'Le mot de passe doit contenir au moins 6 caractères';
      } else if (control.hasError('emailDomain')) {
        return 'Domaine de messagerie invalide';
      }
  
      // Ajoutez d'autres conditions pour les erreurs spécifiques si nécessaire
    }
  
    return '';
  } 
   
}
