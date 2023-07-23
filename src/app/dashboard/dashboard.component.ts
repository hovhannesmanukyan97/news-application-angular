import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone:true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent
      ]
})
export class DashboardComponent {

}
