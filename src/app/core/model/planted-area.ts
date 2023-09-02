import { Culture } from './culture';

export interface PlantedArea {
  _id: string | undefined
  responsible: string
  culture: Culture
  area: number
  date: Date
}
