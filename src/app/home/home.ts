import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  features = [
    { icon: '⚡', title: 'Fast & Reactive', description: 'Built with Angular and RxJS for a snappy, reactive user experience.' },
    { icon: '📦', title: 'Product Catalog', description: 'Browse a full catalog of items with detailed descriptions and availability.' },
    { icon: '✉️', title: 'Get in Touch', description: 'Have a question? Use our validated contact form to reach us instantly.' },
  ];
}
