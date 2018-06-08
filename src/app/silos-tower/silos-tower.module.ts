import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SilosTowerListComponent } from './silos-tower-list-maker.component';
import { SilosTowerComponent } from './silos-tower.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [],
  declarations: [SilosTowerComponent, SilosTowerListComponent],
  providers: []
})
export class SilosTowerModule {}
