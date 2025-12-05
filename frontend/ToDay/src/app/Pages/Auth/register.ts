import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.services';
import { Router } from '@angular/router'; // Pastikan diimport

@Component({
  selector: 'register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: ` 
  <div class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="w-full max-w-sm bg-white shadow-lg rounded-xl p-8">
    
    <!-- Logo -->
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold text-blue-600">MyTodo</h1>
      <p class="text-gray-500 text-sm">Buat akun dan mulai produktif</p>
    </div>

    <!-- Form -->
<form (ngSubmit)="onRegister()" #registerForm="ngForm" class="space-y-4">

 <input type="hidden" name="roles" value="Member" [(ngModel)]="registerData.roles"
            class="flex-1 bg-transparent focus:outline-none text-sm"
            placeholder="Masukkan password">
      <!-- Full Name -->
      <div>
        <label class="block text-gray-700 text-sm mb-1">Nama Lengkap</label>
        <div class="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
          <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5.121 17.804A17.93 17.93 0 0112 15c2.507 0 4.87.514 6.879 1.804M12 12a5 5 0 100-10 5 5 0 000 10z"/>
          </svg>
          <input type="text" name="name"  [(ngModel)]="registerData.name"
            class="flex-1 bg-transparent focus:outline-none text-sm"
            placeholder="Masukkan nama lengkap" required>
        </div>
      </div>

      <!-- Email -->
      <div>
        <label class="block text-gray-700 text-sm mb-1">Email</label>
        <div class="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
          <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 12H8m8 0H8m8 0V8m0 4v4m0-8h.01M8 8h.01" />
          </svg>
          <input type="email" name="email"  [(ngModel)]="registerData.email"
            class="flex-1 bg-transparent focus:outline-none text-sm"
            placeholder="Masukkan email" required>
        </div>
      </div>

      <!-- Password -->
      <div>
        <label class="block text-gray-700 text-sm mb-1">Password</label>
        <div class="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
          <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 00-6 0v2c0 1.657 1.343 3 3 3z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 20h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
          </svg>
          <input type="password" name="password" [(ngModel)]="registerData.password"
            class="flex-1 bg-transparent focus:outline-none text-sm"
            placeholder="Masukkan password" required>
        </div>
      </div>

      <!-- Button -->
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
        Daftar
      </button>

    </form>

    <!-- Bottom nav -->
    <p class="text-center text-sm mt-5 text-gray-600">
      Sudah punya akun?
      <a href="/login" class="text-blue-600 font-medium hover:underline">Login sekarang</a>
    </p>

  </div>
  </div>
`,
})
export class Register {
  registerData = { name:'',email: '', password: '' , roles:'Member'};
  constructor(private service: UserService, private router: Router) {}

onRegister() {
  this.service.postUsers(
    this.registerData.name,
    this.registerData.email,
    this.registerData.password,
    this.registerData.roles
  ).subscribe(
    (response: any) => {
      console.log('Register berhasil:', response);

      const userId = response.data._id; // ← sekarang tidak error
      if (response.data.roles === 'Admin') {
              this.router.navigate(['/users', userId]);
      }
      else{
              this.router.navigate(['/todoList', userId]);
      }

    },
    error => {
      console.error('Register gagal:', error);
    }
  );
}


}
