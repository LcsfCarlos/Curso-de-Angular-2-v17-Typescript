import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { environment } from 'environments/environment';


import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

import localPt from '@angular/common/locales/pt';

registerLocaleData(localPt);

// Interceptor
import { httpInterceptor } from './interceptor/http.interceptor';

// Translate
import { provideTranslate } from './app.translate';

//Img
import { IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig, provideImgixLoader, registerLocaleData } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withRouterConfig(
      {
        paramsInheritanceStrategy: 'always',
      }
    )),
    provideHttpClient(
      withInterceptors([httpInterceptor])
    ),
    provideTranslate(),
    provideImgixLoader(environment.img),
    //{
    //  provide: IMAGE_LOADER,
    //  useValue: (config: ImageLoaderConfig) => {
    //    const img = config.src.split('.');
    //    const name = img.shift();
    //    const type = img.pop();
    //    const width = config.width;
    //    return `${environment.img}${name}${width ? '-' + width + 'w' : ''}.${type}`;
    //  },
    //},
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'pt-BR' }]
};
