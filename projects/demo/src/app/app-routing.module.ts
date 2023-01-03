import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './pages/pages.module';

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking', useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
