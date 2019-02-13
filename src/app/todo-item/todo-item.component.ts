import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';
import { FlagsService } from '../service/flags-service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todoItem: Todo;

  constructor() { }

  ngOnInit() {
    
  }
}
