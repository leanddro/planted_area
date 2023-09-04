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
export class PlantedAreaComponent {

  platedArea: PlantedArea[] = []
  displayedColumns = ['responsible', 'culture', 'area', 'date', 'actions']
  culture = Culture

  public plantedData: { cultures: string[], areas: number[] }

  constructor(private service: PlantedAreaService, private router: Router,
    private route: ActivatedRoute, private snackBar: MatSnackBar) {
    this.platedArea = this.service.plantedAreaList
    this.plantedData = this.createPlantedData()
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

  createPlantedData() {
    const groupedData: { culture: string, area: number }[] = this.platedArea.reduce((acc, curr) => {
      if (!acc[curr.culture]) {
        acc[curr.culture] = { culture: curr.culture, area: curr.area }
      } else {
        acc[curr.culture].area += curr.area
      }
      return acc
    }, {} as any)
    let cultures: string[] = []
    let areas: number[] = []
    Object.values(groupedData).forEach(data => {
      cultures.push(data.culture)
      areas.push(data.area)
    })
    return { cultures: cultures, areas: areas }
  }
}
