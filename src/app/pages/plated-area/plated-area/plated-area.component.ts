import { Component, OnInit } from '@angular/core';
import { PlatedArea } from 'src/app/core/model/plated-area';
import { PlatedAreaService } from 'src/app/core/service/plated-area.service';
import { Culture } from '../../../core/model/culture';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plated-area',
  templateUrl: './plated-area.component.html',
  styleUrls: ['./plated-area.component.scss']
})
export class PlatedAreaComponent implements OnInit {

  platedArea: PlatedArea[] = []
  displayedColumns = ['responsible', 'culture', 'area', 'date', 'actions']
  culture = Culture

  constructor(private service: PlatedAreaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.platedArea = this.service.platedAreaList
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit(plated: PlatedArea) {
    this.router.navigate(['edit', plated._id], { relativeTo: this.route })
  }
}
