import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantedAreaComponent } from './planted-area/planted-area.component';
import { PlantedFormComponent } from './planted-form/planted-form.component';
import { PlatedResolver } from './guards/planted.resolver';

const routes: Routes = [
  { path: '', component: PlantedAreaComponent },
  { path: 'new', component: PlantedFormComponent, resolve: { planted: PlatedResolver } },
  { path: 'edit/:id', component: PlantedFormComponent, resolve: { planted: PlatedResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantedAreaRoutingModule { }
