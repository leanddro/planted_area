import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlatedAreaComponent } from './plated-area/plated-area.component';
import { PlatedFormComponent } from './plated-form/plated-form.component';

const routes: Routes = [
  { path: '', component: PlatedAreaComponent },
  { path: 'new', component: PlatedFormComponent },
  { path: 'edit/:id', component: PlatedFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatedAreaRoutingModule { }
