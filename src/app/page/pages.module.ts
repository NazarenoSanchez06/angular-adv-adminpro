import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';


import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page.component';
import { NgChartsModule } from 'ng2-charts';




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
    FormsModule,
    NgChartsModule,
    ComponentsModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
