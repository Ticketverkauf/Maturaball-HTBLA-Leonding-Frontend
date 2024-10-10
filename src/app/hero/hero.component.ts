import {Component, Input} from '@angular/core';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input()
  color: string = 'violet';

  @Input()
  accentColor: string = 'yellow';
}
