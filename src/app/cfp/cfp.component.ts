import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cfp',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './cfp.component.html',
  styleUrl: './cfp.component.css'
})
export class CfpComponent {
  confTitle = environment.confTitle;
  confAbbrev = environment.confAbbrev;
  confConj1 = environment.confConj1;
  confConj2 = environment.confConj2;
  confSubmissionUrl = environment.confTemplateLink;
  confTemplateLink = environment.confTemplateLink;
  confVenue = environment.confVenue;
}
