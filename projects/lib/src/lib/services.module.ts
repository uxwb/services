import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { EventsService } from './events.service';
import { LocalStorageService } from './local-storage.service';
import { API_PREFIX, RequestService } from './request.service';
import { SessionStorageService } from './session-storage.service';
import { WebsocketService, WS_URI } from './websocket.service';

export class Config {
  ajaxPrefixUrl?:string;

  webSocketUrl?:string;
}

@NgModule({
  imports: [
    HttpClientModule,
  ],
})
export class UxwbServicesModule {
  static forRoot(config?:Config): ModuleWithProviders<UxwbServicesModule> {

    const providers: Provider[] = [
      { provide: 'WINDOW', useValue: window },
      { provide: EventsService },
      { provide: LocalStorageService },
      { provide: SessionStorageService },
    ];

    if (config?.ajaxPrefixUrl) {
      providers.push(
        { provide: API_PREFIX, useValue: config.ajaxPrefixUrl || '' },
        { provide: RequestService },
      );
    }
    if (config?.webSocketUrl) {
      providers.push(
        { provide: WS_URI, useValue: config.webSocketUrl || '' },
        { provide: WebsocketService },
      );
    }
      
    return { ngModule: UxwbServicesModule, providers: providers };
  }
}
