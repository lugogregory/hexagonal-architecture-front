import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ConfigService } from './core/services/config.service';
import { firstValueFrom, tap } from 'rxjs';

const loadAppConfig = () => {
  const config = inject(ConfigService);
  return firstValueFrom(
    config.loadConfig().pipe(tap(res => {
      console.log('App Config Loaded:', res);
    }))
  );
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppInitializer(loadAppConfig),
    provideHttpClient(),
  ],
};
