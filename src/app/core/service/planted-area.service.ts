import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { Culture } from '../model/culture';
import { PlantedArea } from '../model/planted-area';
import { StorageService } from './storage.service';

const plantedAreaListKey = 'Planted_Area_List'
const defaultPlatedList: PlantedArea[] = [
  {
    _id: uuidv4(),
    responsible: 'João',
    culture: Culture.ARROZ,
    area: 10000.0,
    date: new Date('2022-10-10'),
  },
  {
    _id: uuidv4(),
    responsible: 'Maria',
    culture: Culture.FEIJAO,
    area: 7000.0,
    date: new Date('2022-08-12'),
  },
  {
    _id: uuidv4(),
    responsible: 'Jose',
    culture: Culture.MILHO,
    area: 9500.0,
    date: new Date('2022-09-11'),
  },
]

@Injectable({
  providedIn: 'root',
})
export class PlantedAreaService {
  plantedAreaList: PlantedArea[]

  constructor(private storage: StorageService) {
    this.plantedAreaList = storage.getData(plantedAreaListKey) || defaultPlatedList
  }

  private saveAll() {
    this.storage.setData(plantedAreaListKey, this.plantedAreaList)
  }

  save(record: Partial<PlantedArea>) {
    if (record._id!.length <= 0) {
      this.create(record)
    }
    this.update(record)
  }

  findById(id: string) {
    return this.plantedAreaList.find(p => p._id == id)
  }

  private create(record: Partial<PlantedArea>) {
    this.plantedAreaList.push({
      _id: uuidv4(),
      responsible: record.responsible!,
      culture: record.culture!,
      area: record.area!,
      date: record.date!,
    })
    this.saveAll()
  }

  update(changes: any) {
    const index = this.plantedAreaList.findIndex(p => p._id == changes._id)
    const original = this.plantedAreaList.find(p => p._id == changes._id)!
    this.plantedAreaList[index] = { ...original, ...changes }
    this.saveAll()
  }

  delete(record: PlantedArea) {
    const index = this.plantedAreaList.indexOf(record)
    this.plantedAreaList.splice(index, 1)
    this.saveAll()
  }
}
