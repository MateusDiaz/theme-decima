import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ChartsRoutes } from './charts.routing';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { LineComponent } from './line/line.component';
import { MiscComponent } from './misc/misc.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChartsRoutes),
    NgxChartsModule
  ],
  declarations: [
    BarComponent,
    PieComponent,
    LineComponent,
    MiscComponent
  ]
})

export class ChartsModule {}
