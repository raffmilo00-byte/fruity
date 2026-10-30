import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FruitService } from '../../core/services/fruit.service';
import { Fruit } from '../../models/fruit';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private fruitService = inject(FruitService);

  fruits = signal<Fruit[]>([]);
  searchTerm = signal('');
  selectedFruit = signal<Fruit | null>(null);
  loading = signal(true);
  error = signal(false);

  filteredFruits = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    return this.fruits().filter(f => f.name.toLowerCase().includes(term));
  });

  ngOnInit(): void {
    this.fruitService.getAllFruits().subscribe({
      next: (data: Fruit[]) => {
        console.log('DATI RICEVUTI:', data);
        this.fruits.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('ERRORE API:', err);
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  onSearch(event: Event): void {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  selectFruit(fruit: Fruit): void {
    this.selectedFruit.set(fruit);
  }
}