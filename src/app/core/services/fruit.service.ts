import { Injectable, inject, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Fruit } from '../../models/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private http = inject(HttpClient);

  private apiUrl = '/api/fruit';
  private snapshotUrl = '/fruits.json';

  getAllFruits(): Observable<Fruit[]> {
    if (isDevMode()) {
      return this.http.get<Fruit[]>(`${this.apiUrl}/all`);
    }
    return this.http.get<Fruit[]>(this.snapshotUrl);
  }

  getFruitByName(name: string): Observable<Fruit> {
    if (isDevMode()) {
      return this.http.get<Fruit>(`${this.apiUrl}/${encodeURIComponent(name)}`);
    }
    return this.getAllFruits().pipe(
      map(fruits => {
        const fruit = fruits.find(f => f.name.toLowerCase() === name.toLowerCase());
        if (!fruit) {
          throw new Error('Frutto non trovato');
        }
        return fruit;
      })
    );
  }
}