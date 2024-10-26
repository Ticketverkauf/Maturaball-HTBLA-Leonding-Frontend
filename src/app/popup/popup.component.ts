import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
