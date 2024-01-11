import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // httpClient = inject(HttpClient);
  // import constructor จาก service
  constructor(private productservice: ProductService) { }

  products: Product[] = [];

  sendDataToParent2() {
    const dataToSend =  ['Nawat888' ];
    this.productservice.sendData(dataToSend);
  }

  ngOnInit(): void {
    this.getProducts();
    this.sendDataToParent2();
  }

  getProducts(): void{
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    this.productservice.getProducts()
      .subscribe(products => this.products = products);
  }
  
}
