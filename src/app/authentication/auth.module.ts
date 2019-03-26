import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SignupLoginFormComponent } from './signup-login-form/signup-login-form.component';
import { CustomRouteReuseStategy } from './CustomRouteReuseStrategy';
import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from "@angular/router";

@NgModule({
  imports: [FormsModule, CommonModule, HttpClientModule,ReactiveFormsModule],
  declarations: [SignupComponent, LoginComponent, SignupLoginFormComponent],
  providers: [AuthService, { provide: RouteReuseStrategy, useClass: CustomRouteReuseStategy }],
  exports: [SignupComponent, LoginComponent, SignupLoginFormComponent]
})
export class AuthModule {}
