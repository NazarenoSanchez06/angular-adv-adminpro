import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {
labels1:string[]= [ 'Pan', 'Galleta', 'Tacos' ]; 

data1: ChartData<'doughnut'> = {
  labels:this.labels1,
  datasets: [
    {
      data: [50, 450, 100],
      backgroundColor: ['#BD79F0', '#376AF2', '#FB4646'],
    },
  ],
};

 
}
