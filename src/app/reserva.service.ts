import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReservaService {
  private apiUrl = 'http://localhost:3001/purchase';

  constructor(private http: HttpClient) { }

  borrowBook(reserva: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, reserva, { headers });
  }
}