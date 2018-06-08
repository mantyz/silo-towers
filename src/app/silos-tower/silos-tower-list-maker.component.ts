import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { Indicator } from '../models/models';
import { TowerService } from '../services/tower.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tower-list',
  template: `
  <app-silos-tower *ngFor="let indicatorData of indicatorsList" [data]="indicatorData"></app-silos-tower>
  `,
  styles: [
    `
      :host() {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-flow: wrap;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SilosTowerListComponent implements OnInit {
  indicatorsList: Indicator[];

  constructor(
    private _towerService: TowerService,
    private _cdr: ChangeDetectorRef,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.data.subscribe(
      (data: { indicators: Indicator[] }) =>
        (this.indicatorsList = data.indicators)
    );
  }

  /**
   * Get the indicators data from server
   */
  getIndicators() {
    this._towerService.getIndicators().subscribe(data => {
      this.indicatorsList = data;
      this._cdr.markForCheck();
    });
  }
}
