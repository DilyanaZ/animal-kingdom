import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;

  constructor(public authService: AuthService) 
  {
    this.model = new LoginModel('', '');
   }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe();
  }

}
