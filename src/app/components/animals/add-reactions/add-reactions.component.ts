import { Component, OnInit, Input} from "@angular/core";
import { Reaction } from "./reaction";
import { AnimalsService } from "../animals.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-add-reactions",
  templateUrl: "./add-reactions.component.html",
  styleUrls: ["./add-reactions.component.css"]
})
export class AddReactionsComponent implements OnInit {
  @Input()animalId: string;
  status: any;
  reactions: Reaction[] = [
    { value: "like", viewValue: "Like" },
    { value: "love", viewValue: "Love" },
    { value: "haha", viewValue: "Haha" },
    { value: "wow", viewValue: "Wow" },
    { value: "sad", viewValue: "Sad" },
    { value: "angry", viewValue: "Angry" }
  ];

  constructor(
    private animalsService: AnimalsService,
    private router: Router) {}

  ngOnInit() {}

  addAnimalReaction() {
    this.animalsService.createReaction(this.animalId, this.status);
    console.log(this.status);  // Do stuff with your selected value
    console.log(this.animalId);
    this.router.navigate(['/all']);
   }

}
