import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  confSubmissionUrl = environment.confSubmissionUrl;
}
