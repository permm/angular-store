import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataSubject = new BehaviorSubject<any>([]);
  public data = this.dataSubject.asObservable();
  sendData(data: any) {
    this.dataSubject.next(data);
  }
  addData(data: any) {
    const currentArray = this.dataSubject.getValue(); 
    const updatedArray = [currentArray, data];
    this.dataSubject.next(updatedArray);
  }
  private CSubject = new BehaviorSubject<any>(null);
  public Cdata = this.CSubject.asObservable();
  sendAtoC(data: any){
    this.CSubject.next(data)
  }

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private fakeproductUrl = 'https://fakestoreapi.com';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    const url = `${this.fakeproductUrl}/products`;
    return this.http.get<Product[]>(url)
      .pipe(
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.fakeproductUrl}/products/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  addProduct(newproduct: Product): Observable<any> {
    const url = `${this.fakeproductUrl}/products`;
    return this.http.post(url, newproduct, this.httpOptions).pipe(
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateProduct(id: number,product: Product): Observable<any> {
    const url = `${this.fakeproductUrl}/products/${id}`;
    return this.http.put(url, product, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  deleteProduct(id: number): Observable<Product>{
    const url = `${this.fakeproductUrl}/products/${id}`;

    return this.http.delete<Product>(url, this.httpOptions).pipe(
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }
}
