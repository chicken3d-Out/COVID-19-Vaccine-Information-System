import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipient } from 'src/app/covid19Interface';

@Injectable({
  providedIn: 'root'
})
export class VaccineRecipientService {

  constructor(private http: HttpClient) { }
  //Get all list of vaccine recipient
  urlRecipient = "/api/recipient/";

  //GET Method for all vaccine recipient
  getAllRecipient(): Observable<Recipient[]>{
    return this.http.get<Recipient[]>(`${this.urlRecipient}read.php`);
  }
  //POST Method for Vaccine Recipient

  //PUT Method for Vaccine Recipient

  //DELETE Method for Vaccine Recipient
}
