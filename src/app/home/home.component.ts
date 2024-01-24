import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  confTitle = environment.confTitle;
  confAbbrev = environment.confAbbrev;
  confConj1 = environment.confConj1;
  confConj2 = environment.confConj2;
  confDate = environment.confDate;
  confSubmissionUrl = environment.confSubmissionUrl;
}
