import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition}from '@angular/animations';

export interface Reactiion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-reactions',
  templateUrl: './add-reactions.component.html',
  styleUrls: ['./add-reactions.component.css']
})
export class AddReactionsComponent implements OnInit {
  reactions: Reactiion[] = [
    {value: 'like', viewValue: 'Like'},
    {value: 'love', viewValue: 'Love'},
    {value: 'haha', viewValue: 'Haha'},
    {value: 'wow', viewValue: 'Wow'},
    {value: 'sad', viewValue: 'Sad'},
    {value: 'angry', viewValue: 'Angry'}
  ];
//reactions:string[] = ['like', 'like', 'haha', 'wow', 'sad','angry'];
  constructor() { }

  ngOnInit() {
  }

}
