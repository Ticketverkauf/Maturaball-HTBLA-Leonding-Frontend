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
    {name: 'Einlass', time: new Date(new Date().setHours(19, 0, 0, 0))},
    {name: 'Eröffnung des Balls inkl. Eröffnungseinlage', time: new Date(new Date().setHours(20, 0, 0, 0))},
    {name: 'Vorstellung der Maturanten', time: new Date(new Date().setHours(22, 0, 0, 0))},
    {name: 'Tombolaziehung', time: new Date(new Date().setHours(23, 15, 0, 0))},
    {name: 'Krönung des Ballkönigs oder der Ballkönigin', time: new Date(new Date().setHours(23, 30, 0, 0))},
    {name: 'Mitternachtseinlage', time: new Date(new Date().setHours(0, 0, 0, 0))},
    {name: 'Ende des Maturaballs', time: new Date(new Date().setHours(1, 0, 0, 0))},
    {name: 'Afterparty', time: new Date(new Date().setHours(2, 0, 0, 0))}
  ];
  protected readonly window = window;
}
