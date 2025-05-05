import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionComponent } from './components/description/description.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartComponent  } from './components/chart/chart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DescriptionComponent, ChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'echart';
}
