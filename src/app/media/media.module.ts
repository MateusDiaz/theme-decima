import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { MediaRoutes } from './media.routing';
import { GridComponent } from './grid/grid.component';
import { TileComponent } from './tile/tile.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MediaRoutes),
    NgbTooltipModule
  ],
  declarations: [GridComponent, TileComponent, ListComponent]
})

export class MediaModule {}
