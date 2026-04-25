import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Item } from '../item.model';
import { ItemsService } from '../items';

@Component({
  selector: 'app-item-detail',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './item-detail.html',
  styleUrl: './item-detail.css'
})
export class ItemDetailComponent implements OnInit {
  item: Item | undefined;
  notFound = false;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemsService.getById(id).subscribe(item => {
      if (item) {
        this.item = item;
      } else {
        this.notFound = true;
      }
    });
  }
}
