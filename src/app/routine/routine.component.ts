import {Component, Input} from '@angular/core';

export type Routine = {
  name: string,
  time: Date
}
@Component({
  selector: 'app-routine',
  standalone: true,
  imports: [],
  templateUrl: './routine.component.html',
  styleUrl: './routine.component.css'
})
export class RoutineComponent {
  @Input()
  color: string = 'violet';

  routines: Routine[] = [
    {name: 'Morning Routine', time: new Date(new Date().setHours(18, 0, 0, 0))},
    {name: 'Afternoon Routine', time: new Date(new Date().setHours(19, 0, 0, 0))},
    {name: 'Evening Routine', time: new Date(new Date().setHours(20, 0, 0, 0))},
    {name: 'KFC-Popout', time: new Date(new Date().setHours(21, 0, 0, 0))},
    {name: 'Nettspend Show', time: new Date(new Date().setHours(22, 0, 0, 0))},
    {name: 'Diddy Themed Afterparty', time: new Date(new Date().setHours(0, 0, 0, 0))}
  ];
  protected readonly window = window;
}
