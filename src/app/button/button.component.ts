import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  name :string = "Button";

  @Input()
  action :() => void = () => {};

  @Input()
  size: {height: number, width: number} = {height: 50, width: 100};
}
