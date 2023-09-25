import { Product } from './../model/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})//Filho
export class ProductListComponent implements OnInit {

  sessionId = Math.random();

  @Input() productList: Product[] = [];
  @Output() onSelectedInChild = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedProduct(product: Product) {
    console.log(product);
    this.onSelectedInChild.emit(product);
  }

}
