import { Routes } from '@angular/router';
import { CfpComponent } from './cfp/cfp.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommitteeComponent } from './committee/committee.component';
import { DatesComponent } from './dates/dates.component';
import { FeesComponent } from './fees/fees.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { RegistrationComponent } from './registration/registration.component';
import { PublicationComponent } from './publication/publication.component';
import { VenueComponent } from './venue/venue.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { CfrComponent } from './cfr/cfr.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'call4papers', component: CfpComponent },
    { path: 'call4reviewers', component: CfrComponent },
    { path: 'dates', component: DatesComponent },
    { path: 'committee', component: CommitteeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'fees', component: FeesComponent },
    { path: 'guideline', component: GuidelinesComponent},
    { path: 'registration', component: RegistrationComponent},
    { path: 'publication', component: PublicationComponent},
    { path: 'venue', component: VenueComponent},
    { path: 'workshop', component: WorkshopComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},

];
