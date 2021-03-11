import { Component, OnInit } from '@angular/core';
import { todo } from './../../models/ToDo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos:todo[];

  inputTodo:string = "";

  i:string = "";


  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Primer To Do',
        completed: false
      },
      {
        content: 'Segundo To Do',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addToDo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo="";
  }

}
