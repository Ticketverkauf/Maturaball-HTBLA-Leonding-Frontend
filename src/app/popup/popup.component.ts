import {Component, inject, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatDialogRef,
}
from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
   FormsModule,
  ],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  constructor(public dialogRef: MatDialogRef<PopupComponent>){}

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
