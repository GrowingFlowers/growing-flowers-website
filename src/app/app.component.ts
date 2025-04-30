import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Pages/navbar/navbar.component";
import { FooterComponent } from "./Pages/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'growing-flowers-website';

// Function to scroll to top when a route is activated
onActivate(event: Event) {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
}

}
