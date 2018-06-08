import { Injectable } from '@angular/core';
import { SilosTowerModule } from '../silos-tower/silos-tower.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Indicator } from '../models/models';

@Injectable({
  providedIn: SilosTowerModule
})
export class TowerService {
  private _apiUrl = `api/indicators`;

  constructor(private _http: HttpClient) {}

  getIndicators(): Observable<Indicator[]> {
    return this._http.get<Indicator[]>(this._apiUrl);
  }
}
