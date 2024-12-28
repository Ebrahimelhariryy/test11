import { Component, inject } from '@angular/core';
import { NavAuthComponent } from "../nav-auth/nav-auth.component";
import { FooterComponent } from "../footer/footer.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavAuthComponent, FooterComponent ,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loding:boolean=false;
  msg:string=""

  private readonly  _AuthService =inject(AuthService)
  private readonly _Router =inject(Router)

  loginform:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email,]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  })


  loginfun():void{
    if(this.loginform.valid){
      this.loding=true
      this._AuthService.setloginform(this.loginform.value).subscribe({
        next:(res)=>{
          this.loding=false

localStorage.setItem('usertoken',res.token);
this._AuthService.savetokenData()
console.log(this._AuthService.dataToken)

         if(res.massege='succes'){
          this._Router.navigate(['/home'])

         }

        },
        error:(err:HttpErrorResponse)=>{
          this.loding=false
          this.msg=err.error.message
          
        }
      })
    }


  }

}
