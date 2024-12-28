import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private _HttpClient=inject(HttpClient)
productCount:BehaviorSubject<number>=new BehaviorSubject(0)


addproducttocart(id:string):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {
      "productId":id
    },
    
  ) 

}

getloggeduser():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
   
  )
}

deleteitem(id:string):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    
   
  )
}

updatecart(id:string,newcount:number):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      "count": newcount
  },
    
  )
}
clearcart():Observable<any>{
  return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/cart',
    
    )

}
}
