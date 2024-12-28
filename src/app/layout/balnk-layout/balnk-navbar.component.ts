import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavLankComponent } from "../../component/nav-lank/nav-lank.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-balnk-navbar',
  standalone: true,
  imports: [RouterOutlet, NavLankComponent, FooterComponent],
  templateUrl: './balnk-navbar.component.html',
  styleUrl: './balnk-navbar.component.scss'
})
export class BalnkNavbarComponent {

}
