import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<nav class="w-full bg-blue-600 shadow-md">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    
    <!-- Logo -->
    <a class="text-white font-bold text-xl" href="/">MyTodo</a>

    <!-- Toggle Button (Mobile) -->
    <button class="text-white lg:hidden" (click)="isOpen = !isOpen">
      ☰
    </button>

    <!-- Menu -->
    <ul
      class="flex flex-col lg:flex-row lg:space-x-6 text-white font-medium"
     
    >
      <li><a class="py-2 hover:text-yellow-300" routerLink="/">Home</a></li>
      <li><a class="py-2 hover:text-yellow-300" routerLink="/tasks">Tasks</a></li>
      <li><a class="py-2 hover:text-yellow-300" href="#about">About</a></li>
      <li><a class="py-2 hover:text-yellow-300" href="#services">Services</a></li>
      <li><a class="py-2 hover:text-yellow-300" href="#contact">Contact</a></li>
        <!-- Tampilkan hanya jika user belum login -->
      <ng-container *ngIf="!isLoggedIn">
        <li><a class="py-2 hover:text-yellow-300" routerLink="/login">Login</a></li>
        <li><a class="py-2 hover:text-yellow-300" routerLink="/register">Register</a></li>
      </ng-container>

      <!-- Tampilkan jika user sudah login -->
      <ng-container *ngIf="isLoggedIn">
        <li>
          <a class="py-2 hover:text-yellow-300 cursor-pointer" (click)="logout()">
            Logout
          </a>
        </li>
      </ng-container>
    </ul>

  </div>
</nav>
`,
})
export class Navbar {
  isOpen = false;
  isLoggedIn = false;

  constructor(private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('userId');

  }

  logout() {
    localStorage.removeItem('userId');
    window.location.reload();
    window.location.href = '/login';


  }
}
