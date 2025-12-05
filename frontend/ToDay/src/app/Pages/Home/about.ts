import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<section id="about" class="w-full bg-blue-600 py-20">
  <div class="container mx-auto px-6 lg:px-10">
    <div class="flex justify-center">
      <div class="text-center max-w-2xl">

        <h2 class="text-white text-3xl lg:text-4xl font-bold">
          Atur Semua Kegiatanmu dengan Lebih Mudah!
        </h2>

        <div class="w-24 h-1 bg-white mx-auto my-6 rounded-full"></div>

        <p class="text-blue-100 text-lg mb-8">
          MyTodo membantu kamu merencanakan hari dengan lebih teratur, fokus, dan produktif.
          Tambahkan tugas, kelola prioritas, tandai pekerjaan selesai, dan capai targetmu tanpa ribet!
        </p>

        <div class="flex gap-4 justify-center">
          <a
            href="#services"
            class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100 transition"
          >
            Jelajahi Fitur
          </a>

          <a
            href="/tasks"
            class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100 transition"
          >
            Lihat Daftar Tugas
          </a>
        </div>

      </div>
    </div>
  </div>
</section>
`,
})
export class About {}
