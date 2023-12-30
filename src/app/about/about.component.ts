import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  confEmail = environment.confEmail;
  confTel = environment.confTel;
  confTitle = environment.confTitle;
}
