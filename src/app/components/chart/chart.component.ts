import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChartDataService } from '../../services/chart-data.service';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import type { EChartsType } from 'echarts/core';

import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  standalone: true,
  imports: [NgxEchartsModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useValue: {
        echarts: () => import('echarts')
      }
    }
  ]
})
export class ChartComponent implements OnInit {
  chartOption: any;
  echartsInstance: EChartsType | undefined;

  onChartInit(ecInstance: EChartsType): void {
    this.echartsInstance = ecInstance;
  }




  constructor(private chartDataService: ChartDataService) { }

  ngOnInit(): void {
    this._initChartComponent();
  }

  


  private _initChartComponent(): void {
    this.chartOption = this.chartDataService.getChartData();
  }

  onChartTypeChange(event: Event): void {
    const selectedChartType = (event.target as HTMLSelectElement).value;

    this.chartOption = {
      ...this.chartOption,
      series: [
        {
          ...this.chartOption.series[0],
          type: selectedChartType
        }
      ]
    };
  }

}
