import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PlantedAreaService } from '../../core/service/planted-area.service';
import { StorageService } from '../../core/service/storage.service';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { PlantedAreaRoutingModule } from './planted-area-routing.module';
import { PlantedAreaComponent } from './planted-area/planted-area.component';
import { PlantedFormComponent } from './planted-form/planted-form.component';




@NgModule({
  declarations: [
    PlantedAreaComponent,
    PlantedFormComponent
  ],
  imports: [
    CommonModule,
    PlantedAreaRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    PlantedAreaService,
    StorageService
  ]
})
export class PlantedAreaModule { }
