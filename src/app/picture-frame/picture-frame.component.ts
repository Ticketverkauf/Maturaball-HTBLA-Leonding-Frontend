import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-picture-frame',
  standalone: true,
  imports: [],
  templateUrl: './picture-frame.component.html',
  styleUrl: './picture-frame.component.css'
})
export class PictureFrameComponent {
  @Input()
  color: string = 'violet';

  @Input()
  url: string = '';
}
