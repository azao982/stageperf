import { Component } from '@angular/core';
import { CommentaireService } from '../commentaire.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifiercomm',
  templateUrl: './modifiercomm.component.html',
  styleUrls: ['./modifiercomm.component.css']
})
export class ModifiercommComponent {
  constructor(private commentaireService: CommentaireService, private activatedRoute: ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    const id : any = this.activatedRoute.snapshot.paramMap.get('id');
    this.commentaireService.getById(id).subscribe(commentaire => {
      this.commentaire = commentaire;
    });
  }
  commentaire: any = {
    commentaire: '',
  };
  onUpdate() {
    // Access all form data from 'formData' object
    console.log('Form Data:', this.commentaire);
  
    // Appeler la fonction de mise à jour du service
    this.commentaireService.updateCom(this.commentaire, this.commentaire.id).subscribe(() => {
      alert('Le cours a été modifié avec succès!'); // Use alert for success message
      // Rediriger vers la liste des cours après la mise à jour
      this.router.navigate(['/List']);
    }, error => {
      alert('Une erreur s\'est produite lors de la modification du cours.'); // Use alert for error message
    });
  }
  retour(){
    this.router.navigate(['/List'])
  }
}
