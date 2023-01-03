import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UxwbComponentsModule } from '../../../uxwb/components/src/lib/components.module';
import { UxwbFormsModule } from '../../../uxwb/forms/src/lib/forms.module';
import { UxwbServicesModule } from '../../../uxwb/services/src/lib/services.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PagesModule,
    AppRoutingModule,
    UxwbComponentsModule,
    UxwbServicesModule.forRoot({ ajaxPrefixUrl:'/api', webSocketUrl:'/ws' }),
    UxwbFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
