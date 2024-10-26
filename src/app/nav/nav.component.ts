import {Component, Input, inject} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {MatDialog} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  homepage :string = "https://www.htl-leonding.at/";

  readonly dialogService = inject(DialogService);

  @Input()
  color : string = 'violet';

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialogService.openDialog(PopupComponent, '400px', '600px', true);
  }
}
