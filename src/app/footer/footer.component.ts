import { Component, HostListener } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  confAbbrev = environment.confAbbrev;
  confUrl = environment.confUrl;
  confEmail = environment.confEmail;
  confFB = environment.confFB;

  /* Back to top arrow to scroll back to top of the page */
  isShowBackToTopButton = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isShowBackToTopButton = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20);
  }
  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
