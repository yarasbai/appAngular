import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [

  {path: "", component:ConnexionComponent},
  {path: "profile", component:ProfilComponent},
  {path: "inscription", component:InscriptionComponent},
  {path: "todo", component:TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
