import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
import { EspaceDemandeurComponent } from './espace-demandeur/espace-demandeur.component';
import { DonationsComponent } from './donations/donations.component';
import { MesdemandesComponent } from './mesdemandes/mesdemandes.component';
import { EffectuerdemandeComponent } from './effectuerdemande/effectuerdemande.component';
import { EspacedonateurComponent } from './espacedonateur/espacedonateur.component';
import { MesDonationsComponent } from './mes-donations/mes-donations.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
//import {MenuItem} from 'primeng/api';
import { DemandesComponent } from './demandes/demandes.component';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {TabMenuModule} from 'primeng/tabmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ChildAComponent,
    ChildBComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    PageNotFoundComponent,
    SuccessComponent,
    EspaceDemandeurComponent,
    DonationsComponent,
    MesdemandesComponent,
    EffectuerdemandeComponent,
    EspacedonateurComponent,
    MesDonationsComponent,
    DemandesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    TabMenuModule,
    TieredMenuModule,
    //MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
