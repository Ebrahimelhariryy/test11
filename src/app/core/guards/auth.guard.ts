import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router)
  if(typeof localStorage!=='undefined'){
    if( localStorage.getItem('usertoken')!==null){
      _Router.navigate(['/home'])
      return false;
    }
    else{
      
      return true;
    }
  }
  else{
    return false;
  }
  }
;
