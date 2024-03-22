import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-guidelines',
  standalone: true,
  imports: [],
  templateUrl: './guidelines.component.html',
  styleUrl: './guidelines.component.css'
})
export class GuidelinesComponent {
  confTemplateLink = environment.confTemplateLink;
  confTemplateLinkLaTeX = environment.confTemplateLinkLaTeX;
  confSubmissionUrl = environment.confSubmissionUrl;
  confAbbrev = environment.confAbbrev;
}
