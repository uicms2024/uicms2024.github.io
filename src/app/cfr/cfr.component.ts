import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cfr',
  standalone: true,
  imports: [],
  templateUrl: './cfr.component.html',
  styleUrl: './cfr.component.css'
})
export class CfrComponent {
  confAbbrev = environment.confAbbrev;
  confEmail = environment.confEmail;
  cfrLink = environment.cfrLink;
}
