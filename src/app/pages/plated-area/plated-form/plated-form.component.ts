import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlatedAreaService } from 'src/app/core/service/plated-area.service';

import { Culture } from '../../../core/model/culture';

@Component({
  selector: 'app-plated-form',
  templateUrl: './plated-form.component.html',
  styleUrls: ['./plated-form.component.scss']
})
export class PlatedFormComponent {
  cultureEnum = Culture
  form = this.formBuilder.group({
    _id: [''],
    responsible: [''],
    culture: [undefined],
    area: [0],
    date: [new Date()]
  })

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: PlatedAreaService,
    private location: Location,
    private snackBar: MatSnackBar
  ) {

  }

  onSubmit() {
    this.service.add(this.form.value)
    this.snackBar.open('Cadastrado com sucesso!', '', { duration: 5000 })
    this.location.back()
  }

  onCancel() {
    this.location.back()
  }
}
