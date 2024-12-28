import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategory } from '../../core/interface/icategory';

@Component({
  selector: 'app-categeories',
  standalone: true,
  imports: [],
  templateUrl: './categeories.component.html',
  styleUrl: './categeories.component.scss'
})
export class CategeoriesComponent implements OnInit {
  private readonly _CategoriesService= inject(CategoriesService)
  categorylist:Icategory[]=[];
ngOnInit(): void {
  this._CategoriesService.getallcategory().subscribe({
    next:(res)=>{
console.log(res.data)
this.categorylist=res.data
console.log(this.categorylist)
    }
  })
}
}
