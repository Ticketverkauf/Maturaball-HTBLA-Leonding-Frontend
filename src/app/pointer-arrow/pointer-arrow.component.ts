import {Component, Input, signal} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-pointer-arrow',
  standalone: true,
  imports: [],
  templateUrl: './pointer-arrow.component.html',
  styleUrl: './pointer-arrow.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PointerArrowComponent {
  @Input()
  isActive = signal(true);
}
