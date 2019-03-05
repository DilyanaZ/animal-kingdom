import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  imports: [FormsModule, CommonModule, HttpClientModule,],
  declarations: [SignupComponent, LoginComponent],
  providers: [AuthService],
  exports: [SignupComponent, LoginComponent]
})
export class AuthModule {}
