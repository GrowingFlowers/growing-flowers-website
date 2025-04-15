import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-be-vibestar',
  standalone: true,
  imports: [NavbarComponent,CardModule,FooterComponent],
  templateUrl: './be-vibestar.component.html',
  styleUrl: './be-vibestar.component.css'
})
export class BeVibestarComponent {

}
