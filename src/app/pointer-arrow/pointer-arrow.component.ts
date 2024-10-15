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
      // Transition when the element enters the DOM
      transition(':enter', [
        // Set the initial state to transparent and hidden
        style({ opacity: 0 }),
        // Gradually fade in over 300ms
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      // Transition when the element leaves the DOM
      transition(':leave', [
        // Gradually fade out over 300ms
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PointerArrowComponent {
  @Input()
  isActive = signal(true);
}
