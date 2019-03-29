import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsModule } from './components/animals/animals.module';
import { AnimalsRoutingModule } from './components/animals/animals-routing.module';

//components
import { HomeComponent } from './components/home/home.component';
import { WrapperLoginComponent } from './authentication/wrapper-login/wrapper-login.component';
import { WrapperSignupComponent } from './authentication/wrapper-signup/wrapper-signup.component';
import { LoginGuard } from './authentication/guards/login.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent},
  { path: "signup", component: WrapperSignupComponent, canActivate:[LoginGuard]},
  { path: "login", component: WrapperLoginComponent, canActivate:[LoginGuard]},
  { path: "animals", component: HomeComponent},
  { path: "animals", loadChildren: "./components/animals/animals-routing.module#AnimalsModule" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
