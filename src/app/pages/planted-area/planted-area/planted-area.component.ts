import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { Culture } from '../../../core/model/culture';
import { PlantedArea } from '../../../core/model/planted-area';
import { PlantedAreaService } from '../../../core/service/planted-area.service';

@Component({
  selector: 'app-planted-area',
  templateUrl: './planted-area.component.html',
  styleUrls: ['./planted-area.component.scss']
})
export class PlantedAreaComponent implements OnInit {

  platedArea: PlantedArea[] = []
  displayedColumns = ['responsible', 'culture', 'area', 'date', 'actions']
  culture = Culture

  constructor(private service: PlantedAreaService, private router: Router,
    private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.platedArea = this.service.plantedAreaList
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit(planted: PlantedArea) {
    this.router.navigate(['edit', planted._id], { relativeTo: this.route })
  }

  onDelete(planted: PlantedArea) {
    this.service.delete(planted)
    window.location.reload()
    this.snackBar.open('Cadastrado com sucesso!', '', { duration: 10000 })
  }
}
