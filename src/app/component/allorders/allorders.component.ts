import { OrdersService } from './../../services/orders.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent {
  private readonly _OrdersService=inject(OrdersService)




  getallproduct(id:string){
    this._OrdersService.getuserorder(id).subscribe({
      next:(res)=>{
     console.log(res)
     this._OrdersService.savetokenData()
     console.log(this._OrdersService.dataToken)
     
    
      },
      error:(err)=>{
       console.log(err)
     
      }
     })
  }
}
