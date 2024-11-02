import {Component, inject, Input} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import { PopupComponent } from '../popup/popup.component';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input()
  color: string = 'violet';

  @Input()
  accentColor: string = 'yellow';

  readonly dialogService = inject(DialogService);

  openDialog(): void {
    this.dialogService.openDialog(PopupComponent, '60vh', '70vw', true);
  }
}
