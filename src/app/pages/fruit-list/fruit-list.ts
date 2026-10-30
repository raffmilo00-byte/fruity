import { Component, inject, OnInit } from '@angular/core';
import { FruitService } from '../../core/services/fruit.service';
import { Fruit } from '../../models/fruit';

@Component({
  selector: 'app-fruit-list',
  imports: [],
  templateUrl: './fruit-list.html',
  styleUrl: './fruit-list.css',
})
export class FruitList implements OnInit {

  private fruitService = inject(FruitService);

  fruits: Fruit[] = [];

  ngOnInit(): void {
    this.fruitService.getAllFruits().subscribe({
      next: (data) => {
        this.fruits = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}