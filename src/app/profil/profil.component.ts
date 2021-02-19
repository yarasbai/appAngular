import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user:User;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("etat")=="0")
    window.location.replace("");
    this.user = new User();
this.user.email=localStorage.getItem("email");
this.user.mdp=localStorage.getItem("mdp");
this.user.prenom=localStorage.getItem("prenom");
this.user.nom=localStorage.getItem(" nom");

}

deconnect()
{
  localStorage.setItem("etat","0");
}
}
