import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AnimalsService } from './animals.service';
import {Observable} from 'rxjs';
import { AnimalModel } from '../models/animal.model';

@Injectable({
    providedIn: 'root'
  })

  export class AnimalsResolver implements Resolve <AnimalModel[]> {
      constructor (public animalsService: AnimalsService){}

      resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <AnimalModel[]>{
          const message = "Animals did not been found";
          console.error(message);
          return this.animalsService.getAllAnimals();
      }
  }