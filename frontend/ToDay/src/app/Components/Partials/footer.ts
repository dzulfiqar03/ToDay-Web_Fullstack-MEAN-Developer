import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<footer class="bg-gray-100 py-6">
    <div class="container mx-auto px-6 text-center">
        <p class="text-gray-600 text-sm">
            © 2025 MyTodo — Stay organized, stay productive.
        </p>
    </div>
</footer>
`,
})
export class Footer {
}
