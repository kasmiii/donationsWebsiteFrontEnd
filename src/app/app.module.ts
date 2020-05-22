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
    EspacedonateurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
