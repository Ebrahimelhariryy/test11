import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  private readonly _AuthService=inject(AuthService)
  private readonly _Router =inject(Router)
  step:number=1;
  forgetPassword:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required])
  })

  resetCode:FormGroup=new FormGroup({
    resetCode:new FormControl(null,[Validators.pattern(/^[0-9]{6}$/)
      ,Validators.required])
  })
  resetPassword:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)])
  })

  forgetPass():void{
    this._AuthService.forgetPass(this.forgetPassword.value).subscribe({
      next:(res)=>{
        console.log(res)
        if(res.statusMsg== "success"){
          this.step=2
        }

      }
      ,
      error:(err)=>{
        console.log(err)
      }
    })

  }

verifyCode():void{
  this._AuthService.resetcode(this.resetCode.value).subscribe({
    next:(res)=>{
      console.log(res)
      if(res.status=='Success'){
        this.step=3
      }

    }
    ,
    error:(err)=>{
      console.log(err)
    }
  })
}


putNewPassword():void{
this._AuthService.resetpassword(this.resetPassword.value).subscribe({
  next:(res)=>{
    console.log(res)
    localStorage.setItem('usertoken',res.token);
    this._AuthService.savetokenData();
    this._Router.navigate(['/home'])

  }
  ,
  error:(err)=>{
    console.log(err)
  }
})
}

}


