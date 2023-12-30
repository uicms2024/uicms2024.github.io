import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  confTitle = environment.confTitle;
  confAbbrev = environment.confAbbrev;
  confConj1 = environment.confConj1;
  confConj2 = environment.confConj2;
}
