import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  protected _store$ = new ReplaySubject<Event>(100);

  push(v: Event) {
    this._store$.next(v);
  }
  
  pull(id: number): Observable<Event> {
    return this._store$.pipe(
      filter((v: Event) => v.id === id),
    );
  }
}

export class Event {
  id!: number;

  value: any;
}
