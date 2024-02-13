import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.css'
})
export class PublicationComponent {
  confAbbrev = environment.confAbbrev;
}
