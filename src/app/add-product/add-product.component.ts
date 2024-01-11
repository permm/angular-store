import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(
    private productservice: ProductService
    ) { }

  convertNum(str: string) {
    let num: number = Number(str);
    return num;
  }

  add(newproduct: any): void {
    this.productservice.addProduct(newproduct as Product).subscribe();
  }
}
