import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {HomeComponent} from './administracao/home/home.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [

    {
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
      path: 'admin',
      component: HomeComponent
    }

  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }, {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

