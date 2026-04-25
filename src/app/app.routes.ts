import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.HomeComponent),
  },
  {
    path: 'items',
    loadComponent: () => import('./items/items').then(m => m.ItemsComponent),
  },
  {
    path: 'items/:id',
    loadComponent: () => import('./item-detail/item-detail').then(m => m.ItemDetailComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then(m => m.ContactComponent),
  },
  { path: '**', redirectTo: 'home' },
];
