import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit
} from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  windowWidth = 600;
  sidenavTop: number;

  dataLoading: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.resizeListener(window.innerWidth);
    this._router.events.subscribe(routerEvent => {
      this.dataLoading =
        routerEvent instanceof ResolveStart
          ? true
          : routerEvent instanceof ResolveEnd
            ? false
            : false;
      this._cdr.markForCheck();
    });
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  resizeListener(innerWidth: number) {
    this.sidenavTop = innerWidth <= this.windowWidth ? 56 : 64;
  }
}
