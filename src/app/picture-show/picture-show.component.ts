import {Component, Input} from '@angular/core';
import {PictureFrameComponent} from '../picture-frame/picture-frame.component';

@Component({
  selector: 'app-picture-show',
  standalone: true,
  imports: [
    PictureFrameComponent
  ],
  templateUrl: './picture-show.component.html',
  styleUrl: './picture-show.component.css'
})
export class PictureShowComponent {
  @Input()
  color: string = 'violet';

}
