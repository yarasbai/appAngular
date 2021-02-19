import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() { }
rmdpp : string;
user:User;
  ngOnInit(): void {
    this.user = new User();

  }
  save()
  {
localStorage.setItem("nom",this.user.nom);
localStorage.setItem("prenom",this.user.prenom);
localStorage.setItem("email",this.user.email);
localStorage.setItem("mdp",this.user.mdp);
window.location.replace("");


  }

}
