import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<header class="w-full bg-gradient-to-r from-blue-600 to-indigo-700 py-24">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="grid lg:grid-cols-2 gap-12 items-center">

      <!-- TEXT CONTENT -->
      <div class="text-white text-center lg:text-left">
        <h1 class="text-4xl lg:text-5xl font-extrabold leading-tight">
          Atur Tugas Harianmu Menjadi Lebih Mudah & Terorganisir
        </h1>

        <p class="text-blue-100 text-lg mt-6 mb-8 max-w-lg">
          MyTodo membantu kamu membuat daftar tugas, menandai pekerjaan selesai,
          mengatur prioritas, dan tetap produktif setiap hari dengan tampilan yang
          bersih dan mudah digunakan.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="/login"
            class="px-8 py-3 bg-white text-blue-700 font-semibold rounded-md shadow hover:bg-gray-100 transition"
          >
            Mulai Gunakan
          </a>

          <a
            href="#about"
            class="px-8 py-3 bg-blue-500 text-white font-semibold rounded-md border border-white/40 hover:bg-blue-600 transition"
          >
            Lihat Fitur
          </a>
        </div>
      </div>

      <!-- ILLUSTRATION -->
      <div class="flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/students-employees-adding-events-deadlines-calendar-app-young-people-using-time-organizer-planner-flat-illustration_74855-20735.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Todo Illustration"
          class="w-72 lg:w-96 drop-shadow-xl"
        />
      </div>

    </div>
  </div>
</header>
`,
})
export class Hero {}
