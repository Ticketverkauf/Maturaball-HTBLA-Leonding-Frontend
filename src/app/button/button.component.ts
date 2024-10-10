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
  name :string = "";

  @Input()
  action :() => void = () => {};

  @Input()
  size: {height: string, width: string} = {height: '2.5rem', width: 'auto'};

  @Input()
  color :string = 'violet';
}
