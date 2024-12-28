import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

private readonly _HttpClient=inject(HttpClient)

getallbrands():Observable<any>
{
 return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
}
}
