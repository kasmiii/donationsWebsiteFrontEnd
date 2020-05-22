import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GuardGuard } from './guard.guard';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuccessComponent } from './success/success.component';
import { DonationsComponent } from './donations/donations.component';
import { EspaceDemandeurComponent } from './espace-demandeur/espace-demandeur.component';
import { MesdemandesComponent } from './mesdemandes/mesdemandes.component';
import { EffectuerdemandeComponent } from './effectuerdemande/effectuerdemande.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: 'first-component',
  component:FirstComponent,
  children: [
    {
      path: 'child-a', // child route path
      component: ChildAComponent // child route component that the router renders
    },
    {
      path: 'child-b',
      component: ChildBComponent // another child route component that the router renders
    }
  ] 

},

  {path: 'second-component', component: SecondComponent,canActivate:[GuardGuard] },

  {path:'donations',component:DonationsComponent,
  children:[
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'signup',
      component:SignupComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'success',
      component:SuccessComponent
    }
  ]
  },

  {
      path:'espaceDemandeur',component:EspaceDemandeurComponent,
      children:[
      {
        path:'mesDemandes',
        component:MesdemandesComponent
      },
      {
        path:'effectuerDemande',
        component:EffectuerdemandeComponent
      }
      ],
      canActivate:[AuthGuardService]
  },

  {
    path:'espaceDonateur',component:EspaceDemandeurComponent,
    children:[
    {
      path:'mesDonations',
      component:MesdemandesComponent
    },
    {
      path:'demandes',
      component:EffectuerdemandeComponent
    }
    ],
    canActivate:[AuthGuardService]
  },
  {path:'',redirectTo:'/donations/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
