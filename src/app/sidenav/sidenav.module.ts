import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { SilosTowerModule } from '../silos-tower/silos-tower.module';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatProgressBarModule
} from '@angular/material';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    SidenavRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    SilosTowerModule
  ],
  exports: [SidenavComponent],
  declarations: [SidenavComponent]
})
export class SidenavModule {}
