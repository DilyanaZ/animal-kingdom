import { Component, OnInit, Input} from '@angular/core';
import { AnimalModel } from '../../models/animal.model';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input()animal: AnimalModel;
  constructor() { }

  ngOnInit() {
  }

}
