import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private items: Item[] = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', description: 'High-quality noise-cancelling wireless headphones with 30-hour battery life.', price: 149.99, inStock: true },
    { id: 2, name: 'Mechanical Keyboard', category: 'Electronics', description: 'Compact tenkeyless mechanical keyboard with RGB backlight and tactile switches.', price: 89.99, inStock: true },
    { id: 3, name: 'Desk Lamp', category: 'Home Office', description: 'LED desk lamp with adjustable brightness and color temperature, USB-A charging port.', price: 39.99, inStock: false },
    { id: 4, name: 'Ergonomic Chair', category: 'Furniture', description: 'Fully adjustable ergonomic office chair with lumbar support and breathable mesh back.', price: 329.00, inStock: true },
    { id: 5, name: 'Standing Desk', category: 'Furniture', description: 'Electric height-adjustable standing desk, 60" x 30" surface, memory presets.', price: 499.00, inStock: true },
    { id: 6, name: 'Webcam HD 1080p', category: 'Electronics', description: 'Full HD 1080p webcam with built-in microphone and auto-focus for video calls.', price: 59.99, inStock: true },
  ];

  getAll(): Observable<Item[]> {
    return of(this.items);
  }

  getById(id: number): Observable<Item | undefined> {
    return of(this.items.find(i => i.id === id));
  }
}
