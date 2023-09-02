import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Culture } from '../../../core/model/culture';
import { PlantedAreaService } from '../../../core/service/planted-area.service';
import { PlantedArea } from 'src/app/core/model/planted-area';

@Component({
  selector: 'app-planted-form',
  templateUrl: './planted-form.component.html',
  styleUrls: ['./planted-form.component.scss']
})
export class PlantedFormComponent implements OnInit {
  cultureEnum = Culture
  form = this.formBuilder.group({
    _id: [''],
    responsible: [''],
    culture: [Culture.ARROZ],
    area: [0],
    date: [new Date()]
  })

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: PlantedAreaService,
    private location: Location,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const plated: PlantedArea = this.route.snapshot.data['planted']
    this.form.setValue({
      _id: plated._id!,
      responsible: plated.responsible,
      culture: plated.culture,
      area: plated.area,
      date: plated.date
    })
  }

  onSubmit() {
    this.service.save(this.form.value)
    this.snackBar.open('Cadastrado com sucesso!', '', { duration: 5000 })
    this.location.back()
  }

  onCancel() {
    this.location.back()
  }
}
