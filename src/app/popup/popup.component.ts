import {Component, inject, model, signal} from '@angular/core';
import {FormsModule, NgModel} from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';

import {
  MAT_DIALOG_DATA,
  MatDialogRef
}
from '@angular/material/dialog';
import { ButtonComponent } from "../button/button.component";
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-popup',
  standalone: true,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  imports: [
    FormsModule,
    QRCodeModule
  ]
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

  previous(){
    this.currentStep--;
    if(this.currentStep < 1){
      this.onClose();
    }
  }
}
