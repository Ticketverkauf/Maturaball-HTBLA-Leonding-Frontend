import { APP_INITIALIZER, ApplicationConfig, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';

// Keycloak configuration
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://auth.htl-leonding.ac.at', // URL of the Keycloak server
        realm: 'htlleonding', // Realm to be used in Keycloak
        clientId: 'htlleonding-service' // Client ID for the application in Keycloak,
      },
      initOptions: {
        onLoad: 'check-sso', // Action to take on load
        //enableLogging: true, // Enables logging
        pkceMethod: 'S256', // Proof Key for Code Exchange (PKCE) method to use
        // IMPORTANT: implicit flow is no longer recommended, but using standard flow leads to a 401 at the keycloak server
        // when retrieving the token with the access code - we leave it like this for the moment until a solution is found
        flow: 'implicit',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html' // URI for silent SSO checks
      },
      // Enables Bearer interceptor
      enableBearerInterceptor: true,
      // Prefix for the Bearer token
      bearerPrefix: 'Bearer',
      // URLs excluded from Bearer token addition (empty by default)
      //bearerExcludedUrls: []
    });
}

// Provider for Keycloak Bearer Interceptor
const KeycloakBearerInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: KeycloakBearerInterceptor,
  multi: true
};

// Provider for Keycloak Initialization
const KeycloakInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true,
  deps: [KeycloakService]
}



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    KeycloakBearerInterceptorProvider,
    KeycloakInitializerProvider,
    KeycloakService,
    provideAnimationsAsync(), 
    provideHttpClient(withInterceptorsFromDi())
    ]
};
