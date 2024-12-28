import { HttpInterceptorFn } from '@angular/common/http';
import { Token } from '@angular/compiler';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
if(localStorage.getItem('usertoken')!==null){
  req=req.clone({
    
    setHeaders:{token:localStorage.getItem('usertoken')!}
   })
}
 
  return next(req);
};
