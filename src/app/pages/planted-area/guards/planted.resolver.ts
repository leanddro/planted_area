import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

import { PlantedArea } from '../../../core/model/planted-area';
import { PlantedAreaService } from '../../../core/service/planted-area.service';
import { Culture } from 'src/app/core/model/culture';

export const PlatedResolver: ResolveFn<PlantedArea> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  service: PlantedAreaService = inject(PlantedAreaService)
) => {
  if (route.params?.['id']) {
    return service.findById(route.paramMap.get('id')!)!
  }
  return { _id: '', responsible: '', area: 0, culture: Culture.ARROZ, date: new Date(Date.now.toString()) }
}
