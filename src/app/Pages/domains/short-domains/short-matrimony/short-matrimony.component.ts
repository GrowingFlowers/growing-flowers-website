import { Component } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { FooterComponent } from '../../../footer/footer.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-short-matrimony',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CardModule,ButtonModule,RouterModule],
  templateUrl: './short-matrimony.component.html',
  styleUrl: './short-matrimony.component.css'
})
export class ShortMatrimonyComponent {

}
