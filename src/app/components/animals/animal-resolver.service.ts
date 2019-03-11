import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AnimalsService } from './animals.service';
import {Observable} from 'rxjs';
import { Animal } from '../models/animal';
import { tap, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })

  export class AnimalDetailsResolver implements Resolve <Animal> {
      constructor (public animalsService: AnimalsService){}

      resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <Animal>{
          const id =  route.paramMap.get('id');
        // //   return this.animalsService.getAnimalDetails(id).pipe(
        // //     tap(animal => ({
        // //         animal: animal
        // //     }))
        
        // );
        return null;
      }
  }
