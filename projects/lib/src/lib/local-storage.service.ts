import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage?: WindowLocalStorage;

  private name = 'localStorage';

  constructor(@Inject('WINDOW') readonly win: Window) {
    this.storageAvailable(this.name);
  }

  private storageAvailable(type: any): boolean {
    try {
      this.storage = this.win[type];
      const x = '__x__';
      this.storage?.localStorage.setItem(x, x);
      this.storage?.localStorage.removeItem(x);
      return true;
    } catch (e) {
      console.error(e);
      this.storage = undefined;
      return false;
    }
  }

  clear(): void {
    this.storage?.localStorage.clear();
  }

  get(key: string): string | null {
    return this.storage?.localStorage.getItem(key) || null;
  }

  del(key: string): void {
    this.storage?.localStorage.removeItem(key);
  }

  set(key: string, value: string): void {
    this.storage?.localStorage.setItem(key, value);
  }
}
