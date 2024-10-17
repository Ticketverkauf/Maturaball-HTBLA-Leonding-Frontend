import {Component, HostListener, Input, signal} from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {RoutineComponent} from '../routine/routine.component';
import {PointerArrowComponent} from '../pointer-arrow/pointer-arrow.component';
import {PictureShowComponent} from '../picture-show/picture-show.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    RoutineComponent,
    PointerArrowComponent,
    PictureShowComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input()
  color : string = 'violet';

  arrowActive = signal(true);

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.arrowActive.set(false);
  }
}
