import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-picture-show',
  standalone: true,
  imports: [],
  templateUrl: './picture-show.component.html',
  styleUrl: './picture-show.component.css'
})
export class PictureShowComponent {
  @Input()
  color: string = 'violet';

}
