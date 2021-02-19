import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
error=false;
  user:User;
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("etat","0");

    this.user = new User;
  }
  auth()
  {
const log=localStorage.getItem("email");
const pass=localStorage.getItem("mdp");
if((this.user.email==log)&&(this.user.mdp==pass))
{
window.location.replace("profile");
localStorage.setItem("etat","1");
}
else 
this.error=true;



  }

}
