import { Component, Input, Output } from '@angular/core';
import { ChartData,  ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  @Input() title:string='Sin titulo';
  @Input('labels')doughnutChartLabels: string[] = [ 'Data1', 'Data2', 'Data 3' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 350, 450, 100 ],
        backgroundColor: ['#BD79F0', '#376AF2', '#FB4646'],
      }, 
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


}
