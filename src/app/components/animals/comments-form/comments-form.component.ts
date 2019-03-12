import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {
  @Input()animalId:string;
 

  constructor() { }

  ngOnInit() {
  }

 

}
