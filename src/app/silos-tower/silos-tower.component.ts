import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Indicator } from '../models/models';
import { indicatorAnimation } from '../animations';

export type Status = 'ok' | 'warn';

@Component({
  selector: 'app-silos-tower',
  templateUrl: './silos-tower.component.html',
  styleUrls: ['./silos-tower.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [indicatorAnimation]
})
export class SilosTowerComponent implements OnInit, AfterViewInit {
  @Input()
  get data(): Indicator {
    return this._data;
  }
  set data(value: Indicator) {
    this._data = value;
  }
  private _data: Indicator;

  get fullTower() {
    return this._fullTower;
  }
  set fullTower(value: number) {
    this._fullTower = value;
  }
  private _fullTower = 395;

  private _yTop = 17;

  private _towerStatus: Status = 'ok';

  carnalliteMass = Math.round(Math.random() * 1000 + 500);

  @ViewChild('indicator') private _indicator: ElementRef;

  constructor() {}

  ngOnInit() {
    this._changeIndicatorHeight();
  }

  ngAfterViewInit() {}

  private _transformValueToPercent(): number {
    const startPoint = this.data.value - this.data.minValue;
    if (startPoint < 0) {
      return 0;
    }
    const onePercent = (this.data.maxValue - this.data.minValue) / 100;
    return Math.round(startPoint / onePercent);
  }

  get percent(): number {
    return this._transformValueToPercent();
  }

  get towerStatus(): string {
    if (
      this.data.value < this.data.minValue ||
      this.data.value > this.data.maxValue
    ) {
      this._towerStatus = 'warn';
    }
    return this._towerStatus;
  }

  private _changeIndicatorHeight() {
    const indicatorElement = this._indicator.nativeElement as SVGRectElement;
    let indicatorHeight = (this.fullTower / 100) * this.percent;
    if (indicatorHeight > this.fullTower) {
      indicatorHeight = this.fullTower;
    }
    indicatorElement.setAttribute(
      'y',
      `${this._yTop + this.fullTower - indicatorHeight}`
    );
    indicatorElement.setAttribute(
      'height',
      `${this.fullTower - this.fullTower + indicatorHeight}`
    );
  }
}
