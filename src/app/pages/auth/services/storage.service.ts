import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public async set<T>(key: string, value: T){
    await Storage.set({
      key: key,
      value: JSON.stringify(value)
    })
  }

  public async get<T>(key: string): Promise<T> {
    const r = await Storage.get({
      key: key
    })
    return JSON.parse(r.value) as T;
  }

  public async delete(key: string){
    await Storage.remove({
      key: key
    })
  }

  public async clear() {
    await Storage.clear()
  }
}
