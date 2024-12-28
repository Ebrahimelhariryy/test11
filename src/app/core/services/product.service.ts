import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _HttpClient=inject(HttpClient);


  getproduct(): Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')

  }
  getspecificproduct(id:string|null): Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

  }
}
