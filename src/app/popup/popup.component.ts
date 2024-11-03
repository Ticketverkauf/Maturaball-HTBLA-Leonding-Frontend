import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';

import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { isIdentifier } from '@angular/compiler';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf, QRCodeModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})

export class PopupComponent {
  readonly dialogRef = inject(MatDialogRef<PopupComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);
  formData = {
    vorname: '',
    nachname: '',
    email: '',
    telefonnummer: '',
    strasse: '',
    nummer: '',
    plz: '',
    stadt: '',
    klasse: ''
  };

  qrCodeResponse = {
    identifier: ''
  };
  qrCodeData: string | null = null;
  generateQRCode() {
    this.qrCodeData = `MECARD:N:${this.qrCodeResponse.identifier};;`;
  }


  currentStep: number = 1;

  onNoClick(): void {
    this.dialogRef.close();
  }

  setStep(step: number) {
    this.currentStep = step;
  }

  continue() {
    this.currentStep++;
    if(this.currentStep > 5) {
      this.close();
    }
  }

  close() {
    this.dialogRef.close();
  }
}
