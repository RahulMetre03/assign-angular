import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor() { }

  getChartData() {
    return {
      title: {
        text: 'Sales Overview',
        left: 'center',
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold'
        }
      },
      tooltip: {},
      xAxis: {
        name: 'Day of the Week',
        nameLocation: 'middle',
        nameGap: 30,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { lineStyle: { color: '#333' } },
        axisLabel: { rotate: 0 }
      },
      yAxis: {
        name: 'Sales Amount',
        nameLocation: 'middle',
        nameGap: 50,
        axisLine: { lineStyle: { color: '#333' } }
      },
      series: [
        {
          name: 'Sales',
          type: 'bar',
          smooth: true,
          data: [5, 20, 36, 10, 10, 20, 15],
          itemStyle: {
            color: '#4a90e2'
          }
        }
      ]
    };
  }
}
