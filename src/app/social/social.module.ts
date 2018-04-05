import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { SocialComponent } from './social.component';
import { SocialRoutes } from './social.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(SocialRoutes), NgbProgressbarModule, NgbTabsetModule],
  declarations: [SocialComponent]
})

export class SocialModule {}
