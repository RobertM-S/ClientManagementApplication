import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private router:Router, private userserv:UserService) { }

  public onSubmit(): void {
    this.loginValid = true;
    console.log('login', this.username, this.password);
    this.userserv.loginUser(this.username)
    .subscribe({next: resp => {console.log(resp);
      if(resp !== undefined && resp.length!=0){
        for(let user of resp){
          if(user.password === this.password){
            localStorage.setItem("username", this.username);
            this.router.navigate([''])
          }
        }
      } else {
        this.loginValid = false;
      }
    }
    })
  }

}
