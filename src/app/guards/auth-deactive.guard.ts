import { CanDeactivateFn } from '@angular/router';

export const authDeactiveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
