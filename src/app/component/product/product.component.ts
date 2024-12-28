import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Iproduct } from '../../core/interface/iproduct';
import { CurrencyPipe } from '@angular/common';
import { TexttermPipe } from '../../core/textterm.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe,TexttermPipe ,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  private readonly _ProductService=inject(ProductService);
  productlist:Iproduct[]=[];
ngOnInit(): void {
  this._ProductService.getproduct().subscribe({
    next:(res)=>{

this.productlist=res.data
    },
   
  })
}
}
