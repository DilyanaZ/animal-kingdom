import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/authentication/auth.service";
import {
  Router,
  ActivatedRouteSnapshot,
  RouteReuseStrategy
} from "@angular/router";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logOut() {
    this.authService.logout();
    this.isLogged = false;
    this.router.navigate(["/home"]);
  }
}
