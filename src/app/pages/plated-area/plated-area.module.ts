import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PlatedAreaService } from '../../core/service/plated-area.service';
import { StorageService } from '../../core/service/storage.service';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { PlatedAreaRoutingModule } from './plated-area-routing.module';
import { PlatedAreaComponent } from './plated-area/plated-area.component';
import { PlatedFormComponent } from './plated-form/plated-form.component';




@NgModule({
  declarations: [
    PlatedAreaComponent,
    PlatedFormComponent
  ],
  imports: [
    CommonModule,
    PlatedAreaRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    PlatedAreaService,
    StorageService
  ]
})
export class PlatedAreaModule { }
