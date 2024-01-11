import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private productservice: ProductService){}

  ngOnInit(){
    this.productservice.sendAtoC(this.testAtoC)
  }

  title = 'store';
  testAtoC = 'หลานอยู่นี่';
}
