import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // apiUrl: any = environment.apiUrl;
  apiUrl: any = 'https://43.204.206.181:8084';

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
