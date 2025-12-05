import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'body-link',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: ` <!-- Bootstrap core JS-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>

`
})

export class BodyLink{}