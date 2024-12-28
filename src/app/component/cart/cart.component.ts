import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interface/icart';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private readonly _CartService=inject(CartService)
  cartItem:Icart={}as Icart
  loding:boolean=false;
  private readonly _ToastrService=inject(ToastrService)

ngOnInit(): void {
  this._CartService.getloggeduser().subscribe({
    next:(res)=>{
console.log(res.data)
this.cartItem=res.data
    },
    error:(err)=>{
      console.log(err)
          }
  })
}

deleteproduct(id:string):void{
  this.loding=true
  this._CartService.deleteitem(id).subscribe({
    next:(res)=>{
console.log(res)
this.cartItem=res.data;
this.loding=false
this._ToastrService.info(res.status,'fresh cart')
this._CartService.productCount.next(res.numOfCartItems)

    },
    error:(err)=>{
      console.log(err)
          }
  })
}
updatecount(id:string,count:number ):void{
  
  if(count>0){
    this._CartService.updatecart(id,count).subscribe({
      next:(res)=>{
  console.log(res)
  this.cartItem=res.data;
  this._ToastrService.success(res.status,'fresh cart')
  
      },
      error:(err)=>{
        console.log(err)
            }
    })
  
  }
  else{
    this.deleteproduct(id)
  }
  }
  clearcart():void{
    this._CartService.clearcart().subscribe({
      next:(res)=>{
  console.log(res)
  if(res.message= 'success'){
    this.cartItem={}as Icart
    this._CartService.productCount.next(0)
  }
  
      },
      error:(err)=>{
        console.log(err)
            }
    })
  }
}
