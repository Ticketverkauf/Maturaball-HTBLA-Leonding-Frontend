import {Component, inject, model, signal} from '@angular/core';
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
  constructor(public dialogRef: MatDialogRef<PopupComponent>){}

  isSchueler = signal<boolean>(false);

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

  continue() {
    this.currentStep++;
    if(this.currentStep > 5) {
      this.onClose();
    }
  }

  setStep(step: number) {
    this.currentStep = step;
  }

  onClose() {
    this.dialogRef.close();
  }
}
