import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CreateAnimal } from "../../models/animal.model";
import { AnimalsService } from "../animals.service";

@Component({
  selector: "app-create-reactive",
  templateUrl: "./create-reactive.component.html",
  styleUrls: ["./create-reactive.component.css"]
})
export class CreateReactiveComponent implements OnInit {
  animalForm: FormGroup;
  animal: CreateAnimal;
  imageFile: File = null;

  responseMessage: any;

  constructor(private fb: FormBuilder, private animalsService: AnimalsService) {
    this.animal = new CreateAnimal("", 0, "#c0c0c0", "", 0, "");
  }

  ngOnInit() {
    this.animalForm = this.fb.group({
      name: [
        this.animal.name,
        Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      age: [this.animal.name, Validators.required],
      color: [this.animal.color, Validators.required],
      type: [this.animal.type, Validators.required],
      price: [this.animal.price, Validators.required],
      image: [this.animal.image, Validators.required],
      breed: [this.animal.breed, Validators.minLength(3)]
    });
  }

  save(formValues) {
    console.log(formValues);
    let imageUrl = formValues["image"].split("\\");
    formValues["image"] = imageUrl[imageUrl.length - 1];
    console.log(formValues["image"]);
    this.animal = formValues;
    this.animalsService.createAnimal(this.animal).subscribe(res => {
      this.responseMessage = res;
    });
  }

  onFileSelected($event) {
    if ($event.target.files.length > 0) {
      this.imageFile = $event.target.files[0];
      this.animal.image = this.imageFile["name"];
    }
  }

  getMyStyles() {
    let myStyles = {
      "background-image": "url('../assets/images/image.jpg')",
      "z-index": -1
    };
    return myStyles;
  }
}
