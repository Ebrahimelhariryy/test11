import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MylangService {
private readonly _TranslateService=inject(TranslateService)
private readonly _PLATFORM_ID=inject(PLATFORM_ID)
  constructor() {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      let savedLang=localStorage.getItem('lang')
   
      this._TranslateService.setDefaultLang('en');
      if(savedLang!==null){
        this._TranslateService.use(savedLang )
  
      }
      
  this.changedirection();
    }
 
   }
   changedirection():void{
    let savedLang=localStorage.getItem('lang')
    if(savedLang=='en'){
      document.documentElement.dir='ltr'
    }
    else if(savedLang=='ar'){
 document.documentElement.dir='rtl'
    }
   }
   changelanguage(lang:string):void{
    if(isPlatformBrowser(this._PLATFORM_ID)){
    localStorage.setItem('lang',lang)
    this._TranslateService.use(lang)
this.changedirection()
   }
  }
}
