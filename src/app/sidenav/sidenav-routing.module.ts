import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SilosTowerListComponent } from '../silos-tower/silos-tower-list-maker.component';
import { IndicatorResolverService } from '../services/indicator-resolver.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'towers',
        component: SilosTowerListComponent,
        resolve: { indicators: IndicatorResolverService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [IndicatorResolverService]
})
export class SidenavRoutingModule {}
