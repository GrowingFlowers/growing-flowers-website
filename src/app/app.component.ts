import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
