import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private readonly _HttpClient=inject(HttpClient)

 getallcategory():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
 }
 getspecificcategory(id:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
 }
}
