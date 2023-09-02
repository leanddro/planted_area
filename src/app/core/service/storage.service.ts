import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage

  constructor() {
    this.storage = window.localStorage
  }

  getData(key: string) {
    if (this.storage.getItem(key) == null)
      return null
    return JSON.parse(this.storage.getItem(key)!!)
  }

  setData(key: string, data: any) {
    this.storage.setItem(key, JSON.stringify(data))
  }
}
