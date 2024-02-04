import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifieruser',
  templateUrl: './modifieruser.component.html',
  styleUrls: ['./modifieruser.component.css']
})
export class ModifieruserComponent implements OnInit  {
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    const id : any = this.activatedRoute.snapshot.paramMap.get('id');
    this.authService.getById(id).subscribe(personne => {
      this.personne = personne;
    });
  }
  personne: any = {
    emailId: '',
    userName: '',
    password: '',
    role: '',
  };
  onUpdate() {
    // Access all form data from 'formData' object
    console.log('Form Data:', this.personne);
  
    // Appeler la fonction de mise à jour du service
    this.authService.updateVisiteur(this.personne, this.personne.id).subscribe(() => {
      alert('Le cours a été modifié avec succès!'); // Use alert for success message
      // Rediriger vers la liste des cours après la mise à jour
      this.router.navigate(['/listadmin']);
    }, error => {
      alert('Une erreur s\'est produite lors de la modification'); // Use alert for error message
    });
  }
  formData(arg0: string, formData: any) {
    throw new Error('Method not implemented.');
  }  
  retour(){
    this.router.navigate(['/listadmin'])
  }
}
