import { Routes } from '@angular/router';

import { FullcalendarComponent } from './fullcalendar.component';

export const FullcalendarRoutes: Routes = [{
  path: '',
  component: FullcalendarComponent,
  data: {
    heading: 'Calendar'
  }
}];
