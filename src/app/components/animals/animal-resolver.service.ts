import { Injectable, forwardRef } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AnimalsService } from "./animals.service";
import { Observable } from "rxjs";
import {  map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AnimalDetailsResolver implements Resolve<any> {
  constructor(public animalsService: AnimalsService) {}

  resolve(
    route: ActivatedRouteSnapshot, //currently activated route
    state: RouterStateSnapshot //reprisent the state of the application router, it is a tree of ActivatedRouteSnapshots
  ): Observable<any> {
    const id = route.paramMap.get("id");
    //return this.animalsService.getAnimalDetails(route.params.id);
    return this.animalsService
      .getAnimalDetails(id)
      .pipe(map(animal => ({ animal: animal })));
  }
}


