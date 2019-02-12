import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo';
import { UUID } from 'angular2-uuid';
import { TodoRepository } from './repository/todo-repository'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'awesome-todo-list';
  currentTodo: string;
  todoList: Todo[];

  constructor(private todoRepository: TodoRepository){
    
  }

  ngOnInit(){

    debugger;
    this.todoList = this.todoRepository.load()
  }

  addTodo(){
    debugger;
    if(this.todoList === undefined)
      this.todoList = [];

    this.todoList.push({
      id: UUID.UUID(),
      title: this.currentTodo,
      isDone: false
    });

    this.todoRepository.store(this.todoList);

    this.currentTodo = "";
  }
}
