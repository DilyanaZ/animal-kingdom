import { Component } from '@angular/core';
import { titleAnimation } from './components/shared/title.animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: titleAnimation
})
export class AppComponent {
  title = 'animal-kingdom';
}
