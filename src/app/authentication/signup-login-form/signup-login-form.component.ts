import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { User } from "./signup.interface";

@Component({
  selector: "app-signup-login-form",
  templateUrl: "./signup-login-form.component.html",
  styleUrls: ["./signup-login-form.component.css"]
})
export class SignupLoginFormComponent implements OnInit {
  @Input() isRegistered: boolean = false;
  currentName: string;
  user: FormGroup;
  isSignupSuccessful: boolean;
  subscriptionMessage: string;

  profileForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.pattern("[a-zA-Z].*")
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("name")) {
      this.currentName = localStorage.getItem("name");
    }

    this.user = new FormGroup({
      name: new FormControl(""),
      account: new FormGroup({
        email: new FormControl(""),
        password: new FormControl("")
      })
    });
  }

  signUp(formValues) {
    if (this.profileForm.valid && !this.isRegistered) {
      this.isRegistered = true;
      console.log(formValues.name);
      console.log(formValues.password);
      console.log(formValues.email);
      this.authService.signup(formValues).subscribe(res => {
        this.subscriptionMessage = res["message"];
        console.log(this.subscriptionMessage);
        if (res["success"] === true) {
          this.isSignupSuccessful = true;
        }
      });
    }
    this.router.navigate(["/login"]);
    this.profileForm.reset();
  }

  login(formValues) {
    if (this.isRegistered) {
      let loginForm = new FormGroup({
        email: new FormControl(formValues.email, Validators.required),
        password: new FormControl(formValues.password, Validators.required)
      });
      console.log(loginForm.value);
      this.authService.login(loginForm.value).subscribe(data => {
        if (data["success"]) {
          this.router.navigate(["/all"]);
        } else {
          this.subscriptionMessage = data["message"];
          console.log(this.subscriptionMessage);
        }
      });
    }
  }

  validateName() {
    return (
      this.profileForm.controls.name.valid ||
      this.profileForm.controls.name.untouched
    );
  }
  validateEmail() {
    return (
      this.profileForm.controls.email.valid ||
      this.profileForm.controls.email.untouched
    );
  }
  validatePassword() {
    return (
      this.profileForm.controls.password.valid ||
      this.profileForm.controls.password.untouched
    );
  }
}
