import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailscours',
  templateUrl: './detailscours.component.html',
  styleUrls: ['./detailscours.component.css']
})
export class DetailscoursComponent {
  @Input() selectedCourse: any;
  voirpdf(){
    
  }
}
