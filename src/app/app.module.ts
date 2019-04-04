import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";

import { AuthModule } from "./authentication/auth.module";
import { SharedModule } from "./components/shared/shared.module";
import { AnimalsModule } from "./components/animals/animals.module";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    SharedModule,
    AnimalsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
