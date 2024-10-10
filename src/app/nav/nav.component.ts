import {Component, Input} from '@angular/core';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  homepage :string = "https://www.htl-leonding.at/";

  @Input()
  color : string = 'violet';
}
