import { Routes } from '@angular/router';

import { SocialComponent } from './social.component';

export const SocialRoutes: Routes = [{
  path: '',
  component: SocialComponent,
  data: {
    heading: 'Social'
  }
}];
