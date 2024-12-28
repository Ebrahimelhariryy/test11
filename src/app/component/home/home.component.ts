import { Subscription } from 'rxjs';
import { Iproduct } from '../../core/interface/iproduct';
import { ProductService } from './../../core/services/product.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategory } from '../../core/interface/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { TexttermPipe } from '../../core/textterm.pipe';
import { SearchPipe } from '../../core/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../core/services/cart.service';
import { log } from 'console';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,RouterLink,CurrencyPipe,TexttermPipe,SearchPipe,FormsModule,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit ,OnDestroy {

  loding:boolean=false;
productlist:Iproduct[]=[];
categorylist:Icategory[]=[];
productsubscribe!:Subscription;
text:string=" "
private readonly _ToastrService=inject(ToastrService)
private readonly _ProductService=inject(ProductService);
private readonly _CategoriesService=inject(CategoriesService);
private readonly _CartComponent=inject(CartService);
private readonly _CartService=inject(CartService);
customOptionsmain: OwlOptions = {
  rtl:true,
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  autoplay:false,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  navSpeed: 700,
  navText: ['<i class="fa-solid fa-backward"></i>', '<i class="fa-solid fa-forward"></i>'],
  items:1,
 
  nav: false
}
customOptionscat: OwlOptions = {
  loop: true,
  mouseDrag: true,
  rtl:true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  navSpeed: 700,
  navText: ['<i class="fa-solid fa-backward"></i>', '<i class="fa-solid fa-forward"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}



ngOnInit(): void {

  this._CategoriesService.getallcategory().subscribe({
    next:(res)=>{
      console.log(res.data)
      this.categorylist=res.data;
          },
          error:(err)=>{
      console.log(err)
          }

  })
this.productsubscribe= this._ProductService.getproduct().subscribe({
    next:(res)=>{

this.productlist=res.data
    },
    error:(err)=>{
console.log(err)
    }
  })
}
 
ngOnDestroy(): void {
  this.productsubscribe?.unsubscribe()
}

addCart(id:string){
  this.loding=true
  this._CartService.addproducttocart(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.loding=false;
      this._ToastrService.success(res.message,'fresh cart')
      this._CartService.productCount.next(res.numOfCartItems)
      console.log( this._CartService.productCount)
    },
    error:(err)=>{
      console.log(err)

    }

  })
}
}
