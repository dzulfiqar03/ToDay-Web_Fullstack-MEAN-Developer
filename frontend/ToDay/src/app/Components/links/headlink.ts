import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'head-link',
  standalone: true,
  template: ``,
})
export class HeadLink {

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {

    const links: Record<string, string>[] = [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css' },
    ];

    links.forEach(linkInfo => {
      const link = this.renderer.createElement('link');

      Object.keys(linkInfo).forEach(key => {
        this.renderer.setAttribute(link, key, linkInfo[key]);
      });

      this.renderer.appendChild(this.document.head, link);
    });

  }

}
