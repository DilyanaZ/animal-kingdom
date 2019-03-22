import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-login-form',
  templateUrl: './signup-login-form.component.html',
  styleUrls: ['./signup-login-form.component.css']
})
export class SignupLoginFormComponent implements OnInit {
  profileForm = new FormGroup({
    "name": new FormControl(''),
    "email": new FormControl(''),
    "password": new FormControl('')
  }, Validators.required);

  constructor(public authService : AuthService) { }

  
  ngOnInit() {
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      console.log(formValues.value);
      let signupForm = (formValues.value);
      // console.log(formValues.name);
      // console.log(formValues.password);
      // console.log(formValues.email);
      this.authService.signup(signupForm).subscribe();
    }
  }

}
