import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email, this.emailDomainValidator]],
      password: ['', Validators.required],
      role: ['']
    });
  }

  getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);

    if (control.hasError('required')) {
      return 'Ce champ est obligatoire';
    } else if (control.hasError('email')) {
      return 'Adresse email invalide';
    } else if (control.hasError('minlength')) {
      return 'Le mot de passe doit contenir au moins 6 caractères';
    }

    return '';
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
  onLogin(): void {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.handleRoleNavigation(data.role);
        localStorage.setItem('role', data.role);
      },
      error => {
        console.error(error);
        this.errorMessage = "Vous n'êtes pas encore inscrit";
        alert(this.errorMessage);
      }
    );
  }
  private handleRoleNavigation(role: string): void {
    switch (role) {
      case 'admin':
        this.router.navigate(['/listadmin']);
        break;
      case 'formateur':
        this.router.navigate(['/List']);
        break;
      case 'employe':
        this.router.navigate(['/listetud']);
        break;
      // Ajoutez d'autres cas selon vos besoins
      default:
        // Fallback vers une page par défaut ou gestion d'erreur
        break;
    }
  }
}  
