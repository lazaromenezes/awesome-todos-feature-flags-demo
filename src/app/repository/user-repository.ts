import {User} from '../model/user'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserRepository{
    key: string = "user";

    load(): User{
        let user = localStorage.getItem(this.key);

        return JSON.parse(user);
    }

    store(user: User){
        let stringUser = JSON.stringify(user);

        localStorage.setItem(this.key, stringUser);
    }
}