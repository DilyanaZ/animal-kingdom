import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AnimalsService } from "./animals.service";
import { Observable } from "rxjs";
import { Animal } from "../models/animal.model";

@Injectable({
  providedIn: "root"
})

export class AnimalsResolver implements Resolve<Animal[]> {
  constructor(public animalsService: AnimalsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animal[]> {
    // if (this.animalsService.animals == null) {
    //   const message = "Animals did not been found";
    //   alert(message);
    // }
    return this.animalsService.getAllAnimals();
  }
}
