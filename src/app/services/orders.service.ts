import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  dataToken:any=null;
 private readonly _HttpClient=inject(HttpClient)

 myheaders:any={token:localStorage.getItem('usertoken')}

 savetokenData():void{
  if(localStorage.getItem('usertoken')!=null){
   this.dataToken= jwtDecode(localStorage.getItem('usertoken')!)

  }
}


 checkout(id:string|null,shippingdetails:object):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
    {
      "shippingAddress":shippingdetails
    },
    
  )
 }


getuserorder(id:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
}


}