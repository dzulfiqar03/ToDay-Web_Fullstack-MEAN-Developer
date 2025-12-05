import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.services';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    template: `<section id="contact" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">

        <!-- Heading -->
        <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Butuh Bantuan?</h2>
            <div class="w-24 h-1 bg-indigo-600 mx-auto my-4 rounded"></div>
            <p class="text-gray-600 mb-10">
                Ada pertanyaan seputar aplikasi To-Do List? Kirim pesan ke kami dan tim support akan membantu secepatnya.
            </p>
        </div>

        <!-- Form -->
        <div class="max-w-xl mx-auto mb-12">
    <form (ngSubmit)="onCS()" class="bg-white shadow p-5 rounded-lg space-y-5">

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                    <input name="nama" [(ngModel)]="csData.name" type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="Masukkan nama Anda">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input name="email" [(ngModel)]="csData.email" type="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="Masukkan email Anda">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                    <textarea name="message" [(ngModel)]="csData.message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="Tulis pesan Anda..."></textarea>
                </div>

                <button type="submit"
                    class="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition">
                    Kirim Pesan
                </button>
            </form>
        </div>

       
    </div>
</section>
`,
})
export class Contact {
    csData = { name: '', email: '', message: '' };
    constructor(private service: UserService, private router: Router) { }

    onCS() {
        this.service.postCS(
            this.csData.name,
            this.csData.email,
            this.csData.message,
        ).subscribe(
            (response: any) => {
                console.log('CS berhasil:', response);

                window.location.reload();
                alert('Terima Kasih Telah Menghubungi CS Kami')
                this.router.navigate(['/']);


            },
            error => {
                console.error('CS gagal:', error);
            }
        );
    }


}

