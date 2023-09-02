import { Culture } from './culture';

export interface PlatedArea {
  _id: string | undefined
  responsible: string
  culture: Culture
  area: number
  date: Date
}
