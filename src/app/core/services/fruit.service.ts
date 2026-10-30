import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from '../../models/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private http = inject(HttpClient);

  private apiUrl = '/api/fruit';

  getAllFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(`${this.apiUrl}/all`);
  }

  getFruitByName(name: string): Observable<Fruit> {
    return this.http.get<Fruit>(`${this.apiUrl}/${encodeURIComponent(name)}`);
  }
}