import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries,
  chart: ApexChart,
  responsive: ApexResponsive[],
  labels: any
}

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnChanges {
  @ViewChild('chart') chart!: ChartComponent
  @Input({ required: true }) plantedData!: { cultures: string[], areas: number[] }

  public chartOptions!: ChartOptions;

  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = {
      series: this.plantedData.areas,
      chart: {
        width: 450,
        type: "pie"
      },
      labels: this.plantedData.cultures,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}

