import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';


const routes: Routes = [
  {path:'dashboard'         ,
  component:PageComponent,
  children:[
  {path:'dashboard', component:DashboardComponent},
  {path:'progress' , component:ProgressComponent},
  {path:'grafica'  , component:Grafica1Component}, 
   ]
  },   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
