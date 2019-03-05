import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CreateAnimalModel } from 'src/app/models/create-animal.model';

const createUrl = "http://localhost:5000/animals/create";
const allUrl = "http://localhost:5000/animals/all";
const detailsUrl = "http://localhost:5000/animals/details/";
const myFurnitureUrl = "http://localhost:5000/animals/mine";
const deleteUrl = "http://localhost:5000/animals/delete/";
// const searchUrl = "http://localhost:5000/furniture/all?search=";
const statsUrl = "http://localhost:5000/stats";



@Injectable()
export class AnimalsService {
    constructor(public http: HttpClient){

    }
    
    createAnimal(body: CreateAnimalModel){
        return this.http.post(createUrl, body);
    }

    getStatistic() {
        return this.http.get<Object>(statsUrl);
    }


     
}