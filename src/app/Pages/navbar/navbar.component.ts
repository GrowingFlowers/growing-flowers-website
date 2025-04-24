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
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sidebarVisible = false;
  dropdownStates: { [key: string]: boolean } = {};
  activeItem: any = null; // Store active item
  activeSubItem: any = null; // Store active sub-item

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
      ]
    },
    { label: 'Services', route: '/services' },
    { label: 'Careers', section: 'careers', route: '/careers' },
    { label: 'Contact Us', section: 'contact-us', route: '/contact-us' },
  ];

  isItemActive(item: any): boolean {
    if (item.route && this.router.url === item.route) return true;
    if (item.subItems) {
      return item.subItems.some((sub: { route: string; }) => this.router.url.startsWith(sub.route));
    }
    return false;
  }

  isDropdownActive(item: any): boolean {
    return this.dropdownStates[item.label] || this.isItemActive(item);
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

  markAsActive(item: any, sub: any) {
    this.activeItem = item;
    this.activeSubItem = sub;
    this.router.navigate([sub.route]);
  }

  isSubItemActive(item: any): boolean {
    // Check if any of the sub-items is active
    return item.subItems?.some((sub: { route: string }) => this.router.url.startsWith(sub.route));
  }
}
