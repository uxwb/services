import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UxwbServicesModule } from '../../../lib/src/lib/services.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    UxwbServicesModule.forRoot({ ajaxPrefixUrl:'/api', webSocketUrl:'/ws' }),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
