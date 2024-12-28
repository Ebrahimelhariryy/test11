import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MylangService } from '../../core/services/mylang.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-nav-lank',
  standalone: true,
  imports: [ RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './nav-lank.component.html',
  styleUrl: './nav-lank.component.scss'
})
export class NavLankComponent implements OnInit {
  productNum:number=0
  readonly _AuthService =inject(AuthService)
  private readonly _MylangService =inject(MylangService)
  private readonly _CartService =inject(CartService)
  readonly _TranslateService =inject(TranslateService)
  changedirection(lang:string):void{
    localStorage.setItem('lang',lang)
    this._MylangService.changelanguage(lang)
  }
ngOnInit(): void {

this._CartService.getloggeduser().subscribe({
  next:(res)=>{
console.log(res.numOfCartItems)
this._CartService.productCount.next(res.numOfCartItems)
  }
})


this._CartService.productCount.subscribe({
  next:(data)=>{
this.productNum=data
  }
})
}
}
