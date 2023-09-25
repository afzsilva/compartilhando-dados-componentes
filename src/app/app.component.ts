import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './model/product.model';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})//PAI
export class AppComponent implements AfterViewInit, OnInit {

    @ViewChild(ProductListComponent) productList: any;
    sessionId: number;

    constructor() {
      this.sessionId = 0;
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(){
    setTimeout(() => {
      this.sessionId = this.productList.sessionId;
    },0)
  }

    selectedProduct:Product | undefined;

    products = [
    { name: 'Rice', id: 1, price: 200 },
    { name: 'Beans', id: 2, price: 300 },
    { name: 'Bananna', id: 3, price: 400 },
  ];

  onSelectedProductInParent(product:Product){
    this.selectedProduct = product;
  }



}
