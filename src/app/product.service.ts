import { Product } from './product';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public getProducts() {
    let products: Product[];

    products = [
      new Product(900524, 'Vishwa Santhosh', 1, 650000),
      new Product(1024, 'Sam Benjamin', 7, 1500000),
      new Product(5274, 'Muthuvel Pandian', 3, 850000),
      new Product(900523, 'Dharanidharan', 1, 650000),
      new Product(900542, 'ShatishKumar', 1, 650000),
      new Product(23, 'Prakash Raj', 12, 1700000),
      new Product(7, 'John Cena', 13, 2000000),
    ];

    return products;
  }
  private subject = new Subject<any>();
  sendclickevent() {
    this.subject.next('');
  }
  getclickevent(): Observable<any> {
    return this.subject.asObservable();
  }
}
