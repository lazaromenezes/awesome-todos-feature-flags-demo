import { Component } from '@angular/core';
import { Todo } from './model/todo';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awesome-todo-list';
  currentTodo: string;
  todoList: Todo[];

  constructor(){
    
  }

  addTodo(){
    if(this.todoList === undefined)
      this.todoList = [];

    this.todoList.push({
      id: UUID.UUID(),
      title: this.currentTodo,
      isDone: false
    });

    this.currentTodo = "";
  }
}
