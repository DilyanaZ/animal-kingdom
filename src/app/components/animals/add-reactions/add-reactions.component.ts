import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Reaction } from "./reaction";
import { AnimalsService } from "../animals.service";

@Component({
  selector: "app-add-reactions",
  templateUrl: "./add-reactions.component.html",
  styleUrls: ["./add-reactions.component.css"]
})
export class AddReactionsComponent implements OnInit {
  @ViewChild("reactionInput") reactionInput: ElementRef;
  status: any;
  reactions: Reaction[] = [
    { value: "like", viewValue: "Like" },
    { value: "love", viewValue: "Love" },
    { value: "haha", viewValue: "Haha" },
    { value: "wow", viewValue: "Wow" },
    { value: "sad", viewValue: "Sad" },
    { value: "angry", viewValue: "Angry" }
  ];

  constructor(private animalsService: AnimalsService) {}

  ngOnInit() {}

  myFunction() {
    console.log(this.status);  // Do stuff with your selected value
 
  }

}
