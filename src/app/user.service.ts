import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { User } from "./user";
import 'rxjs/add/operator/toPromise';

export class UserService {
    constructor() { };
    createUser() {
        const users = [
            { username: "blakec", password: "123456" },
            { username: "michel", password: "654321" }
        ];
        return users;
    }

    findUser(user: User) {
        var users = this.createUser();

        for (var i = 0; i < users.length; i++) {
            for (var filedName in users[i]) {
                var username = users[i].username;
                var password = users[i].password;
                if (user.username == username && user.password == password) {
                    console.log(username,password);
                    return true;
                }
            }
        }

        // for (var x in users) {
        //     console.log("ceshi:" + x + "=" + users[0]);
        //     if (user.username == x && user.password == users[x]) {
        //         return true;
        //     }
        // }
        return false;
    }
}