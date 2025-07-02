import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
apiUrl: any = 'http://43.204.206.181:8084/api';

  headers = new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  });

  constructor(
    private http: HttpClient
  ) { }


  // Submit Career
  uploadFile(data:FormData): Observable<string>{
   return this.http.post(`${this.apiUrl}/submit/photos`, data,{ responseType: 'text' });
  }

  submitCandidate(data:FormData): Observable<string>{
   return this.http.post(`${this.apiUrl}/submit/candidate`, data,{ responseType: 'text' });
  }
}
