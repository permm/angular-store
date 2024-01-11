import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  header1 = true;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    if (window.scrollY > 0) {
      this.header1 = false;
    } else {
      this.header1 = true;
    }
  }
}
