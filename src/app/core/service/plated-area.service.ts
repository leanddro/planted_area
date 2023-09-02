import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { Culture } from '../model/culture';
import { PlatedArea } from '../model/plated-area';
import { StorageService } from './storage.service';

const platedAreaListKey = 'Plated_Area_List'
const defaultPlatedList: PlatedArea[] = [
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
export class PlatedAreaService {
  platedAreaList: PlatedArea[]

  constructor(private storage: StorageService) {
    this.platedAreaList = storage.getData(platedAreaListKey) || defaultPlatedList
  }
  save() {
    this.storage.setData(platedAreaListKey, this.platedAreaList)
  }

  add(record: Partial<PlatedArea>) {
    this.platedAreaList.push({
      _id: uuidv4(),
      responsible: record.responsible!,
      culture: record.culture!,
      area: record.area!,
      date: record.date!,
    })
    this.save()
  }

  findById(id: string) {
    return this.platedAreaList.find(p => p._id == id)
  }

  update(record: PlatedArea, changes: any) {
    const index = this.platedAreaList.indexOf(record)
    this.platedAreaList[index] = { ...record, ...changes }
    this.save()
  }

  delete(record: PlatedArea) {
    const index = this.platedAreaList.indexOf(record)
    this.platedAreaList.splice(index, 1)
    this.save()
  }
}
