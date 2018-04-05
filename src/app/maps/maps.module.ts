import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { MapsRoutes } from './maps.routing';
import { GoogleComponent } from './google/google.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapsRoutes),
    AgmCoreModule.forRoot({apiKey: 'YOURAPIKEY'})
  ],
  declarations: [
    GoogleComponent,
    FullscreenComponent
  ]
})

export class MapsModule {}
