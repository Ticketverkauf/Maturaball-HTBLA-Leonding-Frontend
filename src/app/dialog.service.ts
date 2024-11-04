import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public dialog: MatDialog) { }

  openDialog(component: any, height: string, width: string, hasBackdrop: boolean) {
    const dialogConfig: MatDialogConfig = {
      height: height,
      width: width,
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: hasBackdrop,
    };
    this.dialog.open(component, dialogConfig);
  }
}
