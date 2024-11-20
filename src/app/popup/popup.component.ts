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
import { PersonalInformation, Table, RoomImage, Ticket, TicketService } from '../ticket.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-popup',
  standalone: true,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  imports: [
    FormsModule,
    QRCodeModule,
    ButtonComponent
]
})

export class PopupComponent {
  login() {
    console.log("login");
    this.keycloakService.login();
  }

  isLoggedIn = signal<boolean>(false);

  constructor(public dialogRef: MatDialogRef<PopupComponent>, private ticketService : TicketService, private keycloakService: KeycloakService) {
    this.init() 
  }

  tickets = signal<Ticket[]>([])
  table = signal('');
  tableoptions = signal<Table[]>([]);
  tableSrc = signal('BilderSaal.png');
  tableImageList : RoomImage[] = [
    {name: 'BilderSaal', src: 'BilderSaal.png'},
    {name: 'BilderSaalGalerie', src: 'BilderSaalGalerie.png'},
    {name: 'FestSaalGalerie', src: 'FestSaalGalerie.png'},
    {name: 'GelberSaal', src: 'GelberSaal.png'},
    {name: 'RoterSaal', src: 'RoterSaal.png'},
  ]

  async init(){
    this.tableoptions.set(await this.ticketService.getAllTables());
    console.log(this.tableoptions());

    this.isLoggedIn.set(await this.keycloakService.isLoggedIn());

    if(this.isLoggedIn()){
      console.log(this.keycloakService);
      console.log(this.keycloakService.getUserRoles());
      const userProfile = await this.keycloakService.loadUserProfile();
      this.formData.firstname = userProfile.firstName!;
      this.formData.lastname = userProfile.lastName!;
      this.formData.mailAddress = userProfile.email!;
      console.log(userProfile);
    }
    this.bookedTickets.set(await this.ticketService.getBookedTickets());
  }

  isSchueler = signal<boolean>(false);

  externalTickets = signal<number>(0);

  studentTickets = signal<number>(0);

  maxTicketPerOrder = 6

  formData : PersonalInformation = {
    firstname: "",
    lastname: "",
    mailAddress: "",
    phoneNumber: "",
    schoolClass: "",
    isMale: true,
    street: "",
    streetNumber: "",
    zipCode: "",
    town: ""
  }

  generateQRCode(param: string) {
    return `MECARD:N:${param};;`;
  }

  bookedTickets = signal<number>(0);

  currentStep: number = 1;

  currentHeader: string[] = ["Insert Personal Information", "Select Tickets", "Select Tables", "Confirm Information", "Your Tickets"]

  continue() {
    this.currentStep++;
    if(this.currentStep === 5){
      this.bookTickets();
    }
    else if(this.currentStep > 5) {
      this.onClose();
    }
  }

  async bookTickets(){
    this.tickets.set(await this.ticketService.bookTickets(this.formData, {externalTicketCount: this.externalTickets(), studentTicketCount: this.studentTickets()}))    
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

  downloadJSON(){
    const blob = new Blob([JSON.stringify(this.tickets())], {type: "application/json"});

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "HTBLALeonding-Maturaball-Tickets.json"

    link.click();

    URL.revokeObjectURL(link.href);
  }
}
