import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service'; // Import your MockService
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';  // ✅ Works correctly
import { NbCardModule } from '@nebular/theme';
@Component({  
  standalone: true, // ✅ Mark as standalone
  imports: [CommonModule, NgxEchartsModule,NbCardModule], 
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  vitalsData: any[] = []; // Array to hold the vitals data
  chartOptions: any;
dashboardCards: any;
  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.dashboardCards = [
      { title: 'Temperature', value: '98.6°F' },
      { title: 'Heart Rate', value: '72 bpm' },
      { title: 'Blood Pressure', value: '120/80' },
    ];
    
    console.log(this.dashboardCards);

    // Get vitals data from MockService
    this.vitalsData = this.mockService.getVitals();

    // Update chart with the mocked vitals data
    this.chartOptions = this.getChartOptions();
    console.log(this.dashboardCards);
    this.chartOptions = this.getChartOptions();
    console.log('Chart Options:', this.chartOptions);

  }

  // Method to create chart options based on mocked data
  getChartOptions() {
    const temperatures = this.vitalsData.map(data => data.temperature);
    const heartRates = this.vitalsData.map(data => data.heartRate);
    const bloodPressure = this.vitalsData.map(data => data.bloodPressure);
    const times = this.vitalsData.map(data => data.Datetime);

    return {
      color: ['#FF6347', '#00FF7F', '#87CEEB'],
      title: {
        text: 'Vitals Over Time'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Temperature', 'Heart Rate', 'Blood Pressure']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: times // x-axis with Datetime
      },
      yAxis: [
        {
          type: 'value',
          name: 'Temperature (°F)',
          min: 95,
          max: 100
        },
        {
          type: 'value',
          name: 'Heart Rate (bpm)',
          min: 60,
          max: 80
        }
      ],
      series: [
        {
          name: 'Temperature',
          type: 'line',
          data: temperatures,
          smooth: true
        },
        {
          name: 'Heart Rate',
          type: 'line',
          data: heartRates,
          smooth: true,
          yAxisIndex: 1
        },
        {
          name: 'Blood Pressure',
          type: 'line',
          data: bloodPressure,
          smooth: true
        }
      ]
    };
  }
}
