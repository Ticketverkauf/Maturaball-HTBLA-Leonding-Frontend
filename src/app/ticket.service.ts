import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export type Table = {
  name: string,
  location: string
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public static URI : string = "http://localhost:8080/api/v1/reservation/"

  constructor(private httpClient :HttpClient) { }

  async getAllTables(){
    return await firstValueFrom<Table[]>(this.httpClient.get<Table[]>(TicketService.URI + "tables"))
  }
  
  async getBookedTickets(){
    return await firstValueFrom<number>(this.httpClient.get<number>(TicketService.URI + "booked-tickets"))
  }
}
