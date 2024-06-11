import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReservaService {
  private apiUrl = 'https://backlibreria-j5fj.onrender.com/purchase';

  constructor(private http: HttpClient) { }

  borrowBook(reserva: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, reserva, { headers });
  }
}