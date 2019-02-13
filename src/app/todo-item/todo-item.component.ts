import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoRepository } from '../repository/todo-repository';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todoItem: Todo;

  constructor(private todoRepository: TodoRepository) { }

  ngOnInit() {
    
  }

  checkItem(){
    this.todoItem.isDone = true;
    this.todoRepository.update(this.todoItem);
  }

  uncheckItem(){
    this.todoItem.isDone = false;
    this.todoRepository.update(this.todoItem);
  }
}
