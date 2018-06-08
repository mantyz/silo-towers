import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Indicator } from '../models/models';
import { TowerService } from './tower.service';

@Injectable()
export class IndicatorResolverService implements Resolve<Indicator[]> {
  constructor(private _towerService: TowerService, private _router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Indicator[]> {
    return this._towerService.getIndicators().pipe(
      take(1),
      map(indicators => indicators)
    );
  }
}
