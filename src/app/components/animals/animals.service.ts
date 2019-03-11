import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CreateAnimalModel } from "../models/create-animal.model";
import { AnimalModel } from "../models/animal.model";
import { tap, map } from "rxjs/operators";
import { Animal } from '../models/animal';

const createUrl = "http://localhost:5000/animals/create";
const allUrl = "http://localhost:5000/animals/all";
const detailsUrl = "http://localhost:5000/animals/details/";
const myFurnitureUrl = "http://localhost:5000/animals/mine";
const deleteUrl = "http://localhost:5000/animals/delete/";
// const searchUrl = "http://localhost:5000/furniture/all?search=";
const statsUrl = "http://localhost:5000/stats";

@Injectable()
export class AnimalsService {
  animals: Array<AnimalModel> = [];


  constructor(public http: HttpClient) {}

  createAnimal(body: CreateAnimalModel) {
    return this.http.post(createUrl, body);
  }

  getStatistic() {
    return this.http.get<Object>(statsUrl);
  }

  getAnimalDetails(id:string){
      return this.http.get<Animal>(detailsUrl + id);
  }

  getAllAnimals() {
    return this.http.get<AnimalModel[]>(allUrl).pipe(
      tap(animals => {
        this.animals = animals;
      })
    );
  }
}
