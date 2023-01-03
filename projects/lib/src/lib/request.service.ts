import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export const API_PREFIX = new InjectionToken<string>('API_PREFIX');

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(
    @Inject(API_PREFIX) private readonly prefix: string,
    private http: HttpClient,
  ) {
    this.prefix = this._trimChar(this.prefix, '/') + '/';
  }

  get(url: string, data?: object): Observable<any> {
    return this._observable(
      this.http.get<any>(this._query(this._uri(url), data), {
        headers: this._headers(data),
      }),
    );
  }

  post(url: string, data: object): Observable<any> {
    return this._observable(
      this.http.post<any>(this._uri(url), data, {
        headers: this._headers(data),
      }),
    );
  }

  put(url: string, data: object): Observable<any> {
    return this._observable(
      this.http.put<any>(this._uri(url), data, { headers: this._headers(data) }),
    );
  }

  delete(url: string, data?: object): Observable<any> {
    return this._observable(
      this.http.delete<any>(this._query(this._uri(url), data), {
        headers: this._headers(data),
      }),
    );
  }

  private _uri(v: string): string {
    return this.prefix + this._trimChar(v, '/');
  }

  private _observable(obs: Observable<any>): Observable<any> {
    return obs.pipe(take(1));
  }

  private _query(url: string, data?: object): string {
    const str: string[] = [];
    for (let [key, value] of Object.entries(data || {})) {
      if (Array.isArray(value)) {
        Array.from(value).forEach((v, i) => {
          str.push(`${key}[${i}]=${encodeURIComponent(v)}`);
        });
      } else {
        str.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
    if (str.length > 0) {
      url = `${url}?${str.join('&')}`;
    }
    return url;
  }

  private _headers(body: any): HttpHeaders {
    let head = new HttpHeaders();
    if (body instanceof FormData) {
      head = head.set('Content-Type', 'multipart/form-data');
    } else {
      head = head.set('Content-Type', 'application/json');
    }
    return head;
  }

  private _trimChar(v: string, ch: string): string {
    let start = 0,
      end = v.length;

    while (start < end && v[start] === ch) ++start;
    while (end > start && v[end - 1] === ch) --end;
    return start > 0 || end < v.length ? v.substring(start, end) : v;
  }
}
