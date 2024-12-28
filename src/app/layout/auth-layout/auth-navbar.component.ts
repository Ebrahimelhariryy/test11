import { Component } from '@angular/core';
import { NavAuthComponent } from "../../component/nav-auth/nav-auth.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-auth-navbar',
  standalone: true,
  imports: [NavAuthComponent, RouterOutlet, FooterComponent],
  templateUrl: './auth-navbar.component.html',
  styleUrl: './auth-navbar.component.scss'
})
export class AuthNavbarComponent {

}
