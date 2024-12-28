import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from '../../core/services/brand.service';
import { Ibrand } from '../../core/interface/ibrand';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
  private readonly _BrandService= inject(BrandService)
  brandlist:Ibrand[]=[];
ngOnInit(): void {
  this._BrandService.getallbrands().subscribe({
    next:(res)=>{
console.log(res.data)
this.brandlist=res.data


    }
  })
}
}

