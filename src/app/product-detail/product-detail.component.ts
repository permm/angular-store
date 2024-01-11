import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductService,
    private location: Location
  ) { }

  receivedData: any;

  addItem(newItem: string) {
    this.productservice.addData(newItem);
  }



  ngOnInit(): void {
    this.getProduct();
    this.productservice.data.subscribe(data => {
      this.receivedData = data;
      
      // Do something with the received data in Parent 2
    });
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productservice.getProduct(id)
      .subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.product)
    if (this.product) {
      this.productservice.updateProduct(id,this.product)
        .subscribe(() => this.goBack());
    }
  }
  delete(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.product) {
      this.productservice.deleteProduct(id)
        .subscribe(() => this.goBack());
    }
  }
}
