
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-fees',
  standalone: true,
  imports: [],
  templateUrl: './fees.component.html',
  styleUrl: './fees.component.css'
})
export class FeesComponent {
  confEmail = environment.confEmail;
  paymentProof = environment.paymentProof;
}
