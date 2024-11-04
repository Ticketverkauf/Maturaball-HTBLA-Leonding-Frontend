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
import { TicketService } from '../ticket.service';
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
  constructor(public dialogRef: MatDialogRef<PopupComponent>, private ticketService : TicketService){
    this.init() 
  }

  async init(){
    this.bookedTickets.set(await this.ticketService.getBookedTickets())
  }

  isSchueler = signal<boolean>(false);

  externalTickets = signal<number>(0);

  studentTickets = signal<number>(0);

  maxTicketPerOrder = 6

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

  bookedTickets = signal<number>(0)

  currentStep: number = 1;

  currentHeader: string[] = ["Insert Personal Information", "Select Tickets", "Select Tables", "Confirm Information", "Your Ticket"]

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
