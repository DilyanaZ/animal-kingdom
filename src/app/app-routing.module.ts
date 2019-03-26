import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsModule } from './components/animals/animals.module';

//components
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupLoginFormComponent } from './authentication/signup-login-form/signup-login-form.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: 'signup', component: SignupLoginFormComponent, data: { shouldReuse: true }},
  { path: 'login', component: SignupLoginFormComponent, data: { shouldReuse: true } },
  { path: 'animals', loadChildren: () => AnimalsModule}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
