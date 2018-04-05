import { Routes } from '@angular/router';

import { EmailComponent } from './email.component';

export const EmailRoutes: Routes = [{
  path: '',
  component: EmailComponent,
  data: {
    heading: 'Email',
    removeFooter: true
  }
}];
