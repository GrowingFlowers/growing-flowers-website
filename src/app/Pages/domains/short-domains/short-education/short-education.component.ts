import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { FooterComponent } from '../../../footer/footer.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-short-education',
  standalone: true,
  imports: [CardModule,RouterModule,NavbarComponent,FooterComponent,ButtonModule],
  templateUrl: './short-education.component.html',
  styleUrl: './short-education.component.css'
})
export class ShortEducationComponent {

}
