import { Component } from '@angular/core';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { FooterComponent } from "../../../footer/footer.component";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-real-estate',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CardModule,ButtonModule,RouterModule],
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.css'
})
export class RealEstateComponent {

}
