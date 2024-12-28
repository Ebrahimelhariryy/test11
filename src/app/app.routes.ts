import { Routes } from '@angular/router';
import { AuthNavbarComponent } from './layout/auth-layout/auth-navbar.component';
import { BalnkNavbarComponent } from './layout/balnk-layout/balnk-navbar.component';
import path from 'path';
import { Component } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { CategeoriesComponent } from './component/categeories/categeories.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { BrandsComponent } from './component/brands/brands.component';
import { guardGuard } from './core/guards/guard.guard';
import { authGuard } from './core/guards/auth.guard';
import { DetailsComponent } from './component/details/details.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { AllordersComponent } from './component/allorders/allorders.component';
import { OrdersComponent } from './component/orders/orders.component';

export const routes: Routes = [
    
    {path:'', component:AuthNavbarComponent, canActivate:[authGuard],
        children:[
            {path:'', redirectTo:'login', pathMatch:'full'},
        {path:'login', component:LoginComponent},
        {path:'register', component:RegisterComponent},
        {path:'forget', component:ForgetpasswordComponent}

    ]},
    {path:'', component:BalnkNavbarComponent, canActivate:[guardGuard],
        children:[
            {path:'', redirectTo:'home', pathMatch:'full'},
        {path:'home',component:HomeComponent },
        {path:'product', component:ProductComponent},
        {path:'cart', component:CartComponent},
        {path:'categeories', component:CategeoriesComponent},
        {path:'brands', component:BrandsComponent},
        {path:'details/:id', component:DetailsComponent},
        {path:'allorders', component:AllordersComponent},
        {path:'orders/:id', component:OrdersComponent}

    ]},
    {path:'**', component:NotfoundComponent}
];
