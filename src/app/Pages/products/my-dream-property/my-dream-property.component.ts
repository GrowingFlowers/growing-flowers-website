import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-my-dream-property',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CardModule],
  templateUrl: './my-dream-property.component.html',
  styleUrl: './my-dream-property.component.css'
})
export class MyDreamPropertyComponent {

}
