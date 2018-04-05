import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { TaskboardComponent } from './taskboard.component';
import { TaskboardRoutes } from './taskboard.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TaskboardRoutes), DragulaModule],
  declarations: [TaskboardComponent]
})

export class TaskboardModule {}
