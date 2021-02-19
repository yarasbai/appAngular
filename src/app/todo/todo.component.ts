import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
texte: string;
heure: string;
events : String[];
  ngOnInit(): void {
    this.events=[];
  }
add()
{
  this.events.push(this.texte+ "/ "+ this.heure);

  this.heure="";
  this.texte="";
  console.log("added event");

}
}
