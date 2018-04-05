import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'ng-sidebar';

import { EmailComponent } from './email.component';
import { EmailRoutes } from './email.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(EmailRoutes), SidebarModule],
  declarations: [EmailComponent]
})

export class EmailModule {}
