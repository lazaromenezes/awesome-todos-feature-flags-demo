import {Todo} from '../model/todo'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TodoRepository{
    key: string = "todo-list";

    load(): Todo[]{
        let todoList = localStorage.getItem(this.key);

        if(todoList === undefined || todoList === null)
            return [];

        return JSON.parse(todoList);
    }

    store(todoList: Todo[]){
        let stringList = JSON.stringify(todoList);

        localStorage.setItem(this.key, stringList);
    }

    update(todoItem: Todo){
        let items = this.load().map(item => {
            if (item.id == todoItem.id)
                return todoItem;
            return item;
        });

        this.store(items);
    }
}