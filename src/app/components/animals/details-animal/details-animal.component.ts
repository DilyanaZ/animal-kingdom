import { Component, OnInit } from "@angular/core";
//import { Animal } from "../../models/animal";
import { ActivatedRoute } from "@angular/router";
import { AnimalsService } from "../animals.service";
import { Observable } from "rxjs";
import { AnimalDetailsResolver } from '../animal-resolver.service';


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
  isReactionAdded: boolean = false;
  isCommentAdded:boolean = false;

  constructor(
    private animalsService: AnimalsService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.animal = data['animal'];
    })
    // this.animalsService.getAnimalDetails(this.id).subscribe(data => {
    //   console.log(data);
    //   this.animal = data;
    // });
  }

  addReaction(){
    this.isReactionAdded = !this.isReactionAdded;
  }
  
  addComment(){
    this.isCommentAdded = !this.isCommentAdded;
  }
}
