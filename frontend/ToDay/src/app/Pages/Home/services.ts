import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<section id="services" class="w-full py-20 bg-gray-50">
  <div class="container mx-auto px-6 lg:px-10">

    <h2 class="text-center text-3xl font-bold text-gray-800">
      Fitur yang Membantu Produktivitasmu
    </h2>

    <div class="w-24 h-1 bg-blue-600 mx-auto my-6 rounded-full"></div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">

      <!-- 1. Task Management -->
      <div class="text-center">
        <div class="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-width="1.5" d="M9 12h6m-6 4h6M7 8h.01M17 8h.01M4 6a2 2 0 012-2h12a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Kelola Tugas</h3>
        <p class="text-gray-600">Tambahkan, edit, hapus, dan tandai tugas selesai dengan cepat.</p>
      </div>

      <!-- 2. Priorities -->
      <div class="text-center">
        <div class="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-width="1.5" d="M12 6v12m6-6H6"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Atur Prioritas</h3>
        <p class="text-gray-600">Beri tanda penting, deadline, atau kategori agar lebih terstruktur.</p>
      </div>

      <!-- 3. Reminders -->
      <div class="text-center">
        <div class="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-width="1.5" d="M12 8v4l2 2m6-2a8 8 0 11-16 0 8 8 0 0116 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Pengingat Waktu</h3>
        <p class="text-gray-600">Jangan lewatkan tugas penting—aktifkan pengingat otomatis.</p>
      </div>

      <!-- 4. Productivity Tracking -->
      <div class="text-center">
        <div class="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-width="1.5" d="M3 12l3.8 3.8a1 1 0 001.4 0L15 9l6 6M3 3h18v18H3V3z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Pantau Produktivitas</h3>
        <p class="text-gray-600">Lihat progres tugas harian dan capai target yang kamu inginkan.</p>
      </div>

    </div>
  </div>
</section>
`,
})
export class Services {}
