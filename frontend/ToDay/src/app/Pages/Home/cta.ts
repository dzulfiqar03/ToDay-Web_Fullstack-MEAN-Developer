import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<section class="py-20 bg-gray-900 text-white text-center">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Mulai Kelola Tugasmu Dengan Lebih Mudah!
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-8">
            Buat, kelola, dan selesaikan to-do list harianmu secara terorganisir. 
            Tingkatkan produktivitas dengan dashboard yang simpel dan intuitif.
        </p>
        <a href="/register" 
           class="inline-block bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl shadow hover:bg-gray-200 transition">
            Daftar Sekarang
        </a>
    </div>
</section>
`,
})
export class CTA {}
