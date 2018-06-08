import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const indicatorAnimation = trigger('indicatorAnimation', [
  state(
    'warn',
    style({
      fill: 'red'
    })
  ),
  transition('* => warn', animate('300ms ease-in'))
]);
