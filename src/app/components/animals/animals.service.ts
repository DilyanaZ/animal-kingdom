import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CreateAnimal, Animal } from "../models/animal.model";
import { tap, map } from "rxjs/operators";

const createUrl = "http://localhost:5000/animals/create";
const allUrl = "http://localhost:5000/animals/all";
const detailsUrl = "http://localhost:5000/animals/details/";
const myAnimalsUrl = "http://localhost:5000/animals/mine";
const deleteUrl = "http://localhost:5000/animals/delete/";
// const searchUrl = "http://localhost:5000/furniture/all?search=";
const statsUrl = "http://localhost:5000/stats";


@Injectable()
export class AnimalsService {
 // animals: Array<Animal> = [];


  constructor(public http: HttpClient) {}

  createAnimal(body: CreateAnimal) {
    return this.http.post(createUrl, body);
  }

  getStatistic() {
    return this.http.get<Object>(statsUrl);
  }

  getAnimalDetails(id:string){
      return this.http.get(detailsUrl + id);
  }

  getAllAnimals() {
    return this.http.get<Animal[]>(allUrl);
  }

  createReaction(id: string, body: string){
    return this.http.post(`http://localhost:5000/animals/details/${id}/reaction`, body);
  }

}
