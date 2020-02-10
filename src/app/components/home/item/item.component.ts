import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SaleItem } from 'src/app/services/data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: SaleItem = {};

  @Output() cartAdd = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  addtoCart($event) {
    this.cartAdd.emit($event);
  }
}
