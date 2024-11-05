import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export type Table = {
  name: string,
  location: string
}

export type Ticket = {
  id: string,
  price: number,
  ticketType: 'STUDENT' | 'EXTERNAL'
}

export type PersonalInformation = {
  firstname: string;
  lastname: string;
  mailAddress: string;
  phoneNumber: string;
  schoolClass: string;
  isMale: boolean;
  street: string;
  streetNumber: string;
  zipCode: string;
  town: string;
}

export type TicketInformation = {
  externalTicketCount : number;
  studentTicketCount : number;
}

type OrderRequest = {
  customer: PersonalInformation
  tickets: TicketInformation
  table: any
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public static URI : string = "https://maturaball.shop/api/v1/reservation/"

  constructor(private httpClient :HttpClient) { }

  async getAllTables(){
    return await firstValueFrom<Table[]>(this.httpClient.get<Table[]>(TicketService.URI + "tables"))
  }
  
  async getBookedTickets(){
    return await firstValueFrom<number>(this.httpClient.get<number>(TicketService.URI + "booked-tickets"))
  }

  async bookTickets(customer : PersonalInformation, tickets: TicketInformation){
    const reqBody:OrderRequest = {
      customer: customer,
      tickets: tickets,
      table: null
    };
    return await firstValueFrom<Ticket[]>(this.httpClient.post<Ticket[]>(TicketService.URI + "book/1", JSON.stringify(reqBody), {
      headers: {
        "Content-Type": "application/json",
        "accept": "*/*"
      }
    }))
  }
}
