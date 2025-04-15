import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-vadhu-var-suchika',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CardModule],
  templateUrl: './vadhu-var-suchika.component.html',
  styleUrl: './vadhu-var-suchika.component.css'
})
export class VadhuVarSuchikaComponent {

}
