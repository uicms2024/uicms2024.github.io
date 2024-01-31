import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [],
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.css'
})
export class VenueComponent {
  confTitle = environment.confTitle;
  confAbbrev = environment.confAbbrev;
  confVenue = environment.confVenue;
}
