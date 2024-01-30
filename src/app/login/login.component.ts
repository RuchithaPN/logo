import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../Models/login';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string = '';

  constructor(private service: SharingService, private router:Router) { }

  login:login=new login();

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('login done....' + this.login.uid);
    if (this.login.uid == "Ranya" && this.login.pwd == "123@") {
      this.message = "Login succssful...";
      this.service.isLoggedIn = true;
      this.router.navigate(['/home']);
    } else {
      this.message = "Login NOT succssful...";
      this.service.isLoggedIn = false;
    }
  }

}
