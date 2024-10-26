import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  readonly dialog = inject(MatDialog);

  openDialog(component: any, height: string, width: string, hasBackdrop: boolean) {
    const dialogConfig: MatDialogConfig = {
      height: height,
      width: width,
      backdropClass: 'dialog-backdrop',
      hasBackdrop: hasBackdrop,
    };
    this.dialog.open(component, dialogConfig);
  }
}
