import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "./user.service";
import { User } from "./user";

@Component({
    selector: 'login-selector',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

    constructor(private service:UserService,private router:Router) {

    }

    public user: User = new User();
    public test:string = 'test';

    ngOnInit(): void {
        console.log("login");
    }

    onSubmit(): void {
        console.log(this.user);
        console.log(this.router);
        var isUser = this.service.findUser(this.user);
        console.log(isUser);
        if (isUser) {
            this.router.navigate(['/dashboard']);
        }
    }

}

