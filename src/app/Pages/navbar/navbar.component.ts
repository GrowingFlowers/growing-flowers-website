import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarModule, CommonModule, RouterModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  sidebarVisible = false;
  dropdownStates: { [key: string]: boolean } = {};
  isVisible = true;
  previousScroll = 0;

  constructor(public router: Router) {}

  items = [
    { label: 'Home', route: '/home' },
    {
      label: 'Company',
      section: 'about-us',
      subItems: [
        { label: 'About Us', route: '/company/about-us' },
        { label: 'Life At GFSS', route: '/company/life-at-gfss' },
        { label: 'Videos', route: '/company/videos' },
      ]
    },
    {
      label: 'Products',
      section: 'our-products',
      subItems: [
        { label: 'Vadhu-Var-Suchika', route: '/products/vadhu-var-suchika' },
        { label: 'My Dream Property', route: '/products/my-dream-property' },
        // { label: 'Be VibeStar', route: '/products/be-vibestar' }
      ]
    },
    { label: 'Services', route: '/services' },
    { label: 'Careers', section: 'careers',route: '/careers' },
    // { label: 'Trainings', section: 'training',
    //   subItems: [
    //     { label: 'Java', route: '/training/java' },
    //     { label: 'MongoDb', route: '/training/MongoDB' },
    //     { label: 'AWS', route: '/training/AWS' }
    //   ]
    //  },
    { label: 'Contact Us', section: 'contact-us', route: '/contact-us' },
  ];

  isItemActive(item: any): boolean {
    if (item.route && this.router.url === item.route) return true;
    if (item.subItems) {
      return item.subItems.some((sub: { route: string; }) => this.router.url.startsWith(sub.route));
    }
    return false;
  }

  toggleDropdown(label: string, event: Event) {
    event.stopPropagation();
    this.dropdownStates[label] = !this.dropdownStates[label];
  }

  openDropdown(label: string) {
    this.dropdownStates[label] = true;
  }

  closeDropdown(label: string) {
    this.dropdownStates[label] = false;
  }
}
