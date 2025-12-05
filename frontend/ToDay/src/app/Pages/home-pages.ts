import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hero } from './Home/hero';
import { About } from './Home/about';
import { Services } from './Home/services';
import { Contact } from './Home/contact';
import { CTA } from './Home/cta';
import { Footer } from '../Components/Partials/footer';

@Component({
    selector: 'home',
    standalone: true,
    imports: [CommonModule, RouterModule, Hero, About, Services, Contact, CTA],
    template: `<app-hero></app-hero>
<app-service></app-service>
<app-about></app-about>
<app-contact></app-contact>
<app-cta></app-cta>

`,
})
export class HomeComponent { }
