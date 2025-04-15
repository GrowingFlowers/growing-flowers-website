import { Component } from '@angular/core';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { FooterComponent } from "../../../footer/footer.component";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-matrimony',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CardModule,ButtonModule,RouterModule],
  templateUrl: './matrimony.component.html',
  styleUrl: './matrimony.component.css'
})
export class MatrimonyComponent {

}
