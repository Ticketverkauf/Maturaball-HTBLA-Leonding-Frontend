import {Component, inject, model, signal} from '@angular/core';
import {PopupComponent} from '../popup/popup.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-tester',
  standalone: true,
  imports: [],
  templateUrl: './popup-tester.component.html',
  styleUrl: './popup-tester.component.css'
})
export class PopupTesterComponent {
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
