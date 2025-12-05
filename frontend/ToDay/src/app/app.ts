import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NavigationEnd, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Navbar } from './Components/Partials/navbar';
import { HeadLink } from './Components/links/headlink';
import { BodyLink } from './Components/links/bodylink';
import { Footer } from './Components/Partials/footer';

import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeadLink, Navbar, Footer, BodyLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router, private title: Title) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;

        // Sembunyikan navbar di /login dan /register
        this.showNavbar = !(url.includes('/login') || url.includes('/register'));
        if (url.includes('/login')) {
          this.title.setTitle('Login - MyTodo');
        } else if (url.includes('/register')) {
          this.title.setTitle('Register - MyTodo');
        } else {
          this.title.setTitle('MyTodo');
        }
      });
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

  showNavbar = true;


}
