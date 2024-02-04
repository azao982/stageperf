import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListesdescoursComponent } from './listesdescours/listesdescours.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjoutComponent } from './ajout/ajout.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AproposComponent } from './apropos/apropos.component';
import { DetailscoursComponent } from './detailscours/detailscours.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifiercoursComponent } from './modifiercours/modifiercours.component';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { ListetudComponent } from './listetud/listetud.component';
import { ListadminComponent } from './listadmin/listadmin.component';
import { ModifieruserComponent } from './modifieruser/modifieruser.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ModifiercommComponent } from './modifiercomm/modifiercomm.component';
import { ListvisitComponent } from './listvisit/listvisit.component';
import { InscrivisitComponent } from './inscrivisit/inscrivisit.component';
import { ListesvisComponent } from './listesvis/listesvis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsvisComponent } from './detailsvis/detailsvis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListesdescoursComponent,
    NavbarComponent,
    ConnexionComponent,
    AjoutComponent,
    InscriptionComponent,
    AproposComponent,
    DetailscoursComponent,
    ModifiercoursComponent,
    FooterComponent,
    ListetudComponent,
    ListadminComponent,
    ModifieruserComponent,
    ModifiercommComponent,
    ListvisitComponent,
    InscrivisitComponent,
    ListesvisComponent,
    DetailsvisComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxExtendedPdfViewerModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
