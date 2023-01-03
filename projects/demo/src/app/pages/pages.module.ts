import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { UxwbComponentsModule } from '../../../../uxwb/components/src/lib/components.module';
import { GuideComponent } from './guide/guide.component';

export const routes: Routes = [
  { title: 'Guide', path: 'guide', component: GuideComponent },
  { path: '**', redirectTo: 'guide' },
];

@NgModule({
  declarations: [
    GuideComponent,
  ],
  imports: [
    CommonModule,
    UxwbComponentsModule,
  ],
  exports: [],
})
export class PagesModule {
}
