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
  firstName: string;
  lastName: string;
  mailAddress: string;
  phoneNumber: string;
  schoolClass: string;
  isMale: boolean;
  street: string;
  streetNumber: string;
  zipCode: string;
  town: string;
}

type OrderRequest = {
  customer: PersonalInformation
  tickets: ('STUDENT' | 'EXTERNAL')[]
  table: any
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  // public static URI : string = "https://maturaball.shop/api/v1/reservation/"
  public static URI : string = "http://localhost:8080/api/v1/reservation/"

  constructor(private httpClient :HttpClient) { }

  async getAllTables(){
    return await firstValueFrom<Table[]>(this.httpClient.get<Table[]>(TicketService.URI + "tables"))
  }
  
  async getBookedTickets(){
    return await firstValueFrom<number>(this.httpClient.get<number>(TicketService.URI + "booked-tickets"))
  }

  async bookTickets(customer : PersonalInformation, tickets: ('STUDENT' | 'EXTERNAL')[]){
    const reqBody:OrderRequest = {
      customer: customer,
      tickets: tickets,
      table: null
    };
    return await firstValueFrom<Ticket[]>(this.httpClient.post<Ticket[]>(TicketService.URI + "book", JSON.stringify(reqBody), {
      headers: {
        "Content-Type": "application/json",
        "accept": "*/*"
      }
    }))
  }
}
