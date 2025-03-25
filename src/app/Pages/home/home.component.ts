import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule,MenubarModule,SidebarModule,CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  sidebarVisible = false;
  
  // items = [
  //   { label: 'Home', icon: 'pi pi-home' },
  //   { label: 'About', icon: 'pi pi-info-circle' },
  //   { 
  //     label: 'Services', icon: 'pi pi-cog',
  //     items: [
  //       { label: 'Web Development', icon: 'pi pi-code' },
  //       { label: 'Mobile Apps', icon: 'pi pi-mobile' }
  //     ]
  //   },
  //   { label: 'Contact', icon: 'pi pi-envelope' }
  // ];

  items = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'Company', icon: 'pi pi-building' },
    { label: 'Our Products', icon: 'pi pi-box' },
    { label: 'Services', icon: 'pi pi-cog' },
    { label: 'Blogs', icon: 'pi pi-book' },
    { label: 'Careers', icon: 'pi pi-briefcase' }
  ];
}
