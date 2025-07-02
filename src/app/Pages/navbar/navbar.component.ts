import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarModule, TooltipModule, CommonModule, RouterModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  sidebarVisible = false; /* Track sidebar visibility */
  dropdownStates: { [key: string]: boolean } = {}; /* Store dropdown state (open/close) */
  activeItem: any = null; /* Store active main item */
  activeSubItem: any = null; /* Store active sub-item */

  // Controls blur overlay
  isDropdownHovered = false; /* Determines if dropdown is hovered to show blur overlay */

  constructor(public router: Router) {}

  // Menu items with subitems
  items = [
    { label: 'Home', route: '/home' },
    {
      label: 'Company',
      section: 'about-us',
      subItems: [
        { label: 'About Us', route: '/company/about-us', description: 'Learn more about us', tooltip_desc: '' },
        { label: 'Life At GFSS', route: '/company/life-at-gfss', description: 'Our work culture', tooltip_desc: '' },
        { label: 'Videos', route: '/company/videos', description: 'Watch our videos', tooltip_desc: '' },
      ]
    },
    {
      label: 'Products',
      section: 'our-products',
      subItems: [
        { label: 'Vadhu-Var-Suchika', route: '/products/vadhu-var-suchika', description: 'Our wedding service', tooltip_desc: "Begin your journey to find a life partner with a wide range of trusted, verified, and well-matched bride and groom profiles." },
        { label: 'My Dream Property', route: '/products/my-dream-property', description: 'Explore properties', tooltip_desc: 'Find your dream plot, flat, bungalow, or row house for buying, selling, or renting with trusted and verified listings.' },
      ]
    },
    { label: 'Services', route: '/services' },
    { label: 'Careers', section: 'careers', route: '/careers' },
    { label: 'Contact Us', section: 'contact-us', route: '/contact-us' },
    { label: 'Trainings', route: '/trainings' },
  ];

  // Check if the item is active (current route)
  isItemActive(item: any): boolean {
    if (item.route && this.router.url === item.route) return true;
    if (item.subItems) {
      return item.subItems.some((sub: { route: string; }) => this.router.url.startsWith(sub.route));
    }
    return false;
  }

  // Check if the dropdown for a given item is active (open)
  isDropdownActive(item: any): boolean {
    return this.dropdownStates[item.label] || this.isItemActive(item);
  }

  // Toggle dropdown open/close
  toggleDropdown(label: string, event: Event) {
    event.stopPropagation();
    this.dropdownStates[label] = !this.dropdownStates[label]; /* Toggle dropdown state */
  }

  // Open dropdown (when hovering)
  openDropdown(label: string) {
    this.dropdownStates[label] = true; /* Set dropdown state to open */
  }

  // Close dropdown (when not hovering)
  closeDropdown(label: string) {
    this.dropdownStates[label] = false; /* Set dropdown state to closed */
  }

  // Mark item and sub-item as active
  markAsActive(item: any, sub: any) {
    this.activeItem = item;
    this.activeSubItem = sub;
    this.router.navigate([sub.route]); /* Navigate to the subitem route */
  }

  // Check if any sub-item of a dropdown is active
  isSubItemActive(item: any): boolean {
    return item.subItems?.some((sub: { route: string }) => this.router.url.startsWith(sub.route));
  }

  // Blur overlay handlers
  onDropdownHoverStart() {
    this.isDropdownHovered = true; /* Activate blur overlay when dropdown is hovered */
  }

  onDropdownHoverEnd() {
    this.isDropdownHovered = false; /* Deactivate blur overlay when dropdown is not hovered */
  }
}
