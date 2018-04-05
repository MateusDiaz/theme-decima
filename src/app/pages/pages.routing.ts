import { Routes } from '@angular/router';

import { InvoiceComponent } from './invoice/invoice.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ActivtyComponent } from './activty/activty.component';
import { PricingComponent } from './pricing/pricing.component';
import { ForumComponent } from './forum/forum.component';
import { BlankComponent } from './blank/blank.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'invoice',
      component: InvoiceComponent,
      data: {
        heading: 'Invoice'
      }
    }, {
      path: 'forum',
      component: ForumComponent,
      data: {
        heading: 'Forum'
      }
    }, {
      path: 'timeline',
      component: TimelineComponent,
      data: {
        heading: 'Timeline'
      }
    }, {
      path: 'activity',
      component: ActivtyComponent,
      data: {
        heading: 'Activity'
      }
    }, {
      path: 'pricing',
      component: PricingComponent,
      data: {
        heading: 'Pricing'
      }
    }, {
      path: 'blank',
      component: BlankComponent,
      data: {
        heading: 'Blank'
      }
    }]
  }
];
