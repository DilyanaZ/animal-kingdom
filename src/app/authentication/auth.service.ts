import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SignUpModel } from "./models/signup.model";
import { LoginModel } from "./models/login.model";
import { isUndefined } from "util";

const loginUrl = "http://localhost:5000/auth/login";
const signupUrl = "http://localhost:5000/auth/signup";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(body: SignUpModel) {
    return this.http.post(signupUrl, body);
  }

  login(body: any) {
    return this.http.post(loginUrl, body);
  }

  // login(body: LoginModel) {
  //   return this.http.post(loginUrl, body);
  // }

  logout() {
    localStorage.removeItem("currentUser");
    localStorage.clear();
    //To clear the token
  }

  isAuthenticated(): boolean {
    return localStorage.getItem("currentUser") !== null;
  }

  isLoggedIn(): boolean {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser){
      let token = currentUser.token;
      if (token) {
        return true;
      }
    }
    return false;
  }

  get user() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return currentUser;
  }
}
