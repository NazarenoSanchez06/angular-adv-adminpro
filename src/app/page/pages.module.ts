import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PageComponent
  ],
  exports:[
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
