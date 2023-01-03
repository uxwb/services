import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private storage?: WindowSessionStorage;

  private name = 'sessionStorage';

  constructor(@Inject('WINDOW') readonly win: Window) {
    this.storageAvailable(this.name);
  }

  private storageAvailable(type: any): boolean {
    try {
      this.storage = this.win[type];
      const x = '__x__';
      this.storage?.sessionStorage.setItem(x, x);
      this.storage?.sessionStorage.removeItem(x);
      return true;
    } catch (e) {
      console.error(e);
      this.storage = undefined;
      return false;
    }
  }

  clear(): void {
    this.storage?.sessionStorage.clear();
  }

  get(key: string): string | null {
    return this.storage?.sessionStorage.getItem(key) || null;
  }

  del(key: string): void {
    this.storage?.sessionStorage.removeItem(key);
  }

  set(key: string, value: string): void {
    this.storage?.sessionStorage.setItem(key, value);
  }
}
