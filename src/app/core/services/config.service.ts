import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppConfig } from '../models/app-config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _http: HttpClient = inject(HttpClient);
  private _appConfig!: AppConfig;
  private _appConfig$: BehaviorSubject<AppConfig | null> = new BehaviorSubject<AppConfig | null>(null);

  get appConfig(): AppConfig {
    return this._appConfig;
  }

  get appConfig$(): Observable<AppConfig | null> {
    return this._appConfig$.asObservable();
  }

  public loadConfig(): Observable<AppConfig> {
    return this._http.get<AppConfig>(`${environment.appConfiguration}`).pipe(
      tap((config: AppConfig) => {
        this._appConfig = config;
        this._appConfig$.next(config);
      })
    );
  }
}
