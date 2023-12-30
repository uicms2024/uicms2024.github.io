import { Component } from '@angular/core';
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
}
