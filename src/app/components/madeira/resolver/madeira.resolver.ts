import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Madeira } from '../../../models/madeira.model';
import { inject } from '@angular/core';
import { MadeiraService } from '../../../services/madeira.service';


export const madeiraResolver: ResolveFn<Madeira> =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(MadeiraService).findById(route.paramMap.get('id')!);
};
