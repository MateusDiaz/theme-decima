import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { CardsRoutes } from './cards.routing';
import { BasicComponent } from './basic/basic.component';
import { PortletsComponent } from './portlets/portlets.component';
import { DraggableComponent } from './draggable/draggable.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CardsRoutes),
    DragulaModule,
    NgbCollapseModule
  ],
  declarations: [BasicComponent, PortletsComponent, DraggableComponent]
})

export class CardsModule {}
