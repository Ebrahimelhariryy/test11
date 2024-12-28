import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, inject, Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
dataToken:any=null;
  private readonly _HttpClient=inject(HttpClient);
  private readonly _Router= inject(Router);



  setRegisterform(data:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
  }


  
  setloginform(data:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
  }



  savetokenData():void{
    if(localStorage.getItem('usertoken')!=null){
     this.dataToken= jwtDecode(localStorage.getItem('usertoken')!)

    }
  }

  logout():void{
    localStorage.removeItem('usertoken');
    this.dataToken=null;
    this._Router.navigate(['/login'])

  }

  forgetPass(data:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',data)
  }

  resetcode(data:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',data)
  }

  resetpassword(data:object):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data)
  }


}
