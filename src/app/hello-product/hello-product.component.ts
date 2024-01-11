import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-hello-product',
  templateUrl: './hello-product.component.html',
  styleUrl: './hello-product.component.css'
})
export class HelloProductComponent {
  @Input() item = '';

  @Output() newItemEvent = new EventEmitter<string>();

  dataFromA: any;

  constructor(private productservice: ProductService,){}

  ngOnInit(){
    this.productservice.Cdata.subscribe(data => {
      this.dataFromA = data;

      // Do something with the received data in Parent 2
    });
  }

  addNewCode(value: string) {
    this.newItemEvent.emit(value);
    console.log(value)
  }
}
