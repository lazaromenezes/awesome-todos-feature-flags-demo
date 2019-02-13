import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoRepository } from '../repository/todo-repository';
import { FlagsService } from '../service/flags-service';
import { debug } from 'util';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todoItem: Todo;

  get isLinedThrough(){
    return this.todoItem.isDone && this.flagService.isFeatureEnabled('line-through-done-items', false);
  }

  constructor(private todoRepository: TodoRepository, 
    private flagService: FlagsService) { }

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
