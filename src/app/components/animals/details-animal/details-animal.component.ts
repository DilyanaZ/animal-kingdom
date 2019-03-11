import { Component, OnInit } from "@angular/core";
import { Animal } from "../../models/animal";
import { ActivatedRoute } from "@angular/router";
import { AnimalsService } from "../animals.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-details-animal",
  templateUrl: "./details-animal.component.html",
  styleUrls: ["./details-animal.component.css"]
})
export class DetailsAnimalComponent implements OnInit {
  pageTitle = "Animal Details";
  //animal: Animal;
  id: string;
  animal: any;
  constructor(
    private animalsService: AnimalsService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {
   
    this.animalsService
      .getAnimalDetails(this.id)
      .subscribe(data => (this.animal = data));
    console.log(this.animal);
    console.log(this.id);
  }
}
