import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  apiUrl: string = "http://localhost:8445";

  headers = new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  });

  constructor(
    private http: HttpClient
  ) { }


  // Submit Career
  submitCareer(data:FormData){
   return this.http.post(`${this.apiUrl}/api/submit/apply-job`, data);
  }
}
