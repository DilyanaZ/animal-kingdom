import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { CreateAnimal} from "../../models/animal.model";
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
    this.animal = new CreateAnimal ("", 0, "", "", 0, "");
  
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
    this.animal = formValues;
    console.log("ANIMAL" + JSON.stringify(this.animal));
    this.animalsService.createAnimal(this.animal).subscribe(res => {
      this.responseMessage = res;
      console.log("MESSAGE" + JSON.stringify(this.responseMessage));
    });
  }

  onFileSelected($event) {
    if ($event.target.files.length > 0) {
      this.imageFile = $event.target.files[0];
      this.animal.image = this.imageFile["name"];
      console.log(this.imageFile["name"]);
      console.log(this.animal.image);
    }
  }

  getMyStyles() {
    let myStyles = {
      "background-image": "url('../assets/images/image.jpg')",
      "z-index": -1
    };
    return myStyles;
  }

  // defaultAnimal(): void {
  //   this.animalForm.patchValue({
  //     name: "Rori",
  //     animalType: "Dog"
  //   });
  // }
}
