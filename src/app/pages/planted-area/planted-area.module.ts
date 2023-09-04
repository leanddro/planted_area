import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PlantedAreaService } from '../../core/service/planted-area.service';
import { StorageService } from '../../core/service/storage.service';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { PlantedAreaRoutingModule } from './planted-area-routing.module';
import { PlantedAreaComponent } from './planted-area/planted-area.component';
import { PlantedFormComponent } from './planted-form/planted-form.component';
import { PieComponent } from './charts/pie/pie.component';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    PlantedAreaComponent,
    PlantedFormComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    PlantedAreaRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  providers: [
    PlantedAreaService,
    StorageService
  ]
})
export class PlantedAreaModule { }
