import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule ,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {
  msg:string="";
  loding:boolean=false;
 registersubscribe!:Subscription;

  private readonly _authServices=inject(AuthService)
  private readonly _FormBuilder =inject(FormBuilder)
  private readonly _Router =inject(Router)

  // registerform:FormGroup=this._FormBuilder.group({
  //   name:[null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
  //   email:[null,[Validators.required,Validators.email,]],
  //   password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
  //   rePassword:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
  //   phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]

  // },{validators:this.confirmPassword} )

  registerform:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    email:new FormControl(null,[Validators.required,Validators.email,]),
    password:new FormControl(null ,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl(null),
    phone:new FormControl(null ,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },this.confirmPassword)
  
  regesterFun():void{
    if(this.registerform.valid)
      {
        this.loding=true;
        this.registersubscribe= this._authServices.setRegisterform(this.registerform.value).subscribe({
          next:(res)=>{
            this.loding=false;
            console.log(res)
            if( res.message='succes'){

              this._Router.navigate(['/login'])

            }
           
          },

          error:(err:HttpErrorResponse)=>{
            this.msg=err.error.message
            console.log(err)
            this.loding=false;
          }
        
        })
      
    }
    else{
      // this.registerform.setErrors({mithmatch:true})
      this.registerform.markAllAsTouched()
    }
  }
  ngOnDestroy(): void {
    this.registersubscribe.unsubscribe()
  }

  confirmPassword(g:AbstractControl){
    if(g.get('password')?.value===g.get('rePassword')?.value)
      {

      return null

    }
    else{
      return{mithmatch:true}
    }

  }

}
