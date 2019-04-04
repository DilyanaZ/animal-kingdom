import { Component, OnInit } from "@angular/core";
import { AnimalsService } from "../animals.service";
import { CreateAnimal } from "../../models/animal.model";
import { FileUploader } from "ng2-file-upload/ng2-file-upload";

@Component({
  selector: "app-create-animal",
  templateUrl: "./create-animal.component.html",
  styleUrls: ["./create-animal.component.css"]
})
export class CreateAnimalComponent implements OnInit {
  animalModel: CreateAnimal;
  imageFile: File = null;

  constructor(private animalsService: AnimalsService) {
    this.animalModel = new CreateAnimal("", 0, "", "", 0, "");
  }

  ngOnInit() {}

  save() {
    this.animalsService.createAnimal(this.animalModel).subscribe();
    console.log(this.animalModel);
  }

  getMyStyles() {
    let myStyles = {
      "background-image": "url('../assets/images/image.jpg')",
      "z-index": -1
    };
    return myStyles;
  }

  onFileSelected($event) {
      if ($event.target.files.length > 0) {
      this.imageFile = $event.target.files[0];
      this.animalModel.image = this.imageFile["name"];
      console.log(this.imageFile["name"]);
    }
  }
}
