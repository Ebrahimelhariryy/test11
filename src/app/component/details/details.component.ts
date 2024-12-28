import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Iproduct } from '../../core/interface/iproduct';
import { Subscription } from 'rxjs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit, OnDestroy {
 private readonly  _ActivatedRoute=inject(ActivatedRoute);
 private readonly _ProductService=inject(ProductService)
productDetails:Iproduct|null=null;
productsubscribe!:Subscription;

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText:  ['<i class="fa-solid fa-backward"></i>', '<i class="fa-solid fa-forward"></i>'],
 items:1,

  nav:false
}

 ngOnInit(): void {
 
   this._ActivatedRoute.paramMap.subscribe({
    next:(p)=>{
     let idData=p.get('id');
      
   this._ProductService.getspecificproduct(idData).subscribe({
    next:(res)=>{
      console.log(res.data)
     this.productDetails=res.data;

    },
    error:(err)=>{

console.log(err)
    }
   })
    }
   })
 }
   ngOnDestroy(): void {
     this.productsubscribe?.unsubscribe()
   }

}
