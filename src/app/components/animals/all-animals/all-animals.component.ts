import { Component, OnInit } from "@angular/core";
import { AnimalModel } from "../../models/animal.model";
import { AnimalsService } from "../animals.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-all-animals",
  templateUrl: "./all-animals.component.html",
  styleUrls: ["./all-animals.component.css"]
})
export class AllAnimalsComponent implements OnInit {
  animals: Array<AnimalModel> = [];
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private animalsService: AnimalsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.animals = this.animalsService.animals;
  }
  changePage(page) {
    this.currentPage = page;
  }
}
