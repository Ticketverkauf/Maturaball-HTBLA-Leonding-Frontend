import {Component, Input} from '@angular/core';
import {HeroComponent} from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input()
  color : string = 'violet';

}
