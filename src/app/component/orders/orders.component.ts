import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _OrdersService=inject(OrdersService)
  id:string|null=" "
  deatilsform:FormGroup=new FormGroup({
    details:new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required]),
    city:new FormControl(null,[Validators.required]),
  })
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(parm)=>{
console.log (parm.get('id'))
this.id=parm.get('id')
      }
    })
  }
ordersubmit():void{
console.log(this.deatilsform.value)
this._OrdersService.checkout(this.id,this.deatilsform.value).subscribe({
 next:(res)=>{
console.log(res)
window.open(res.session.url,'_self')
 },
 error:(err)=>{
  console.log(err)

 }
})
}
}
