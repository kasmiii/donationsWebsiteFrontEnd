import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
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
import {DemandesComponent } from './demandes/demandes.component';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {TabMenuModule} from 'primeng/tabmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {MenuItem, MessageService} from 'primeng/api';
import {FieldsetModule} from 'primeng/fieldset';
import {TabViewModule} from 'primeng/tabview';
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from "primeng/toast";
import {MessageModule} from "primeng/message";
import {PanelModule} from "primeng/panel";
import {InputNumberModule} from 'primeng/inputnumber';
import { DemandeItemComponent } from './demande-item/demande-item.component';
import {CardModule} from 'primeng/card';
import { DetailDemandeComponent } from './detail-demande/detail-demande.component';

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
    DemandesComponent,
    DemandeItemComponent,
    DetailDemandeComponent
    
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
    FieldsetModule,
    TabViewModule,
    RadioButtonModule,
    InputTextModule,
    ToastModule,
    MessageModule,
    PanelModule,
    ReactiveFormsModule,
    InputNumberModule,
    CardModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
