import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListesdescoursComponent } from './listesdescours/listesdescours.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AproposComponent } from './apropos/apropos.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DetailscoursComponent } from './detailscours/detailscours.component';
import { ModifiercoursComponent } from './modifiercours/modifiercours.component';
import { ListetudComponent } from './listetud/listetud.component';
import { ListadminComponent } from './listadmin/listadmin.component';
import { ModifieruserComponent } from './modifieruser/modifieruser.component';
import { ModifiercommComponent } from './modifiercomm/modifiercomm.component';
import { FooterComponent } from './footer/footer.component';
import { InscrivisitComponent } from './inscrivisit/inscrivisit.component';
import { ListesvisComponent } from './listesvis/listesvis.component';
const routes: Routes = [
  { path:'',title:"Acceuil" ,component: HomeComponent },
  { path:'Connexion',title:"Connexion" ,component: ConnexionComponent },
  {path:'List',title:"List",component:ListesdescoursComponent},
  {path:'ajout',title:"Ajout",component:AjoutComponent},
  {path:'apropos',title:"apropos",component:AproposComponent},
  {path:'inscription',title:"inscription",component:InscriptionComponent},
  {path:'listetud',title:"listetud",component:ListetudComponent},
  {path: 'detailscours',title:"detailscours", component:DetailscoursComponent },
  {path: 'modifier/:id',title:"modifier", component:ModifiercoursComponent },
  {path: 'modifiercomm/:id',title:"modifiercomm", component:ModifiercommComponent },
  {path: 'modifieruser/:id',title:"modifieruser", component:ModifieruserComponent },
  {path:"listadmin",title:"listadmin",component:ListadminComponent},
  {path:"footer",title:"contact",component:FooterComponent},
  {path:"inscrivisit/:nomDucours",title:"inscrivisit",component:InscrivisitComponent},
  {path:"listesvis",title:"listesvis",component:ListesvisComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule,
  BrowserModule,

  ],
  exports: [RouterModule],
 
})
export class AppRoutingModule {
 }
