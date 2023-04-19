import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-high-chart',
  templateUrl: './dashboard-high-chart.component.html',
  styleUrls: ['./dashboard-high-chart.component.scss'],
})
export class DashboardHighChartComponent implements OnInit {
  arr = [
    { type: 1, index: 0 },
    { type: 1, index: 1 },
    { type: 1, index: 2 },
    { type: 1, index: 3 },
    { type: 1, index: 4 },
    { type: 1, index: 5 },
    { type: 1, index: 6 },
    { type: 1, index: 7 },
    { type: 1, index: 8 },
    { type: 1, index: 9 },
    { type: 1, index: 10 },
    { type: 1, index: 11 },
    { type: 1, index: 12 },
    { type: 1, index: 13 },
    { type: 1, index: 14 },
    { type: 1, index: 15 },
    { type: 1, index: 16 },
    { type: 1, index: 17 },
    { type: 1, index: 18 },
    { type: 1, index: 19 },
    { type: 1, index: 20 },
    { type: 1, index: 21 },
    { type: 1, index: 22 },
    { type: 1, index: 23 },
    { type: 1, index: 24 },
    { type: 1, index: 25 },
    { type: 1, index: 26 },
    { type: 1, index: 27 },
    { type: 1, index: 28 },
    { type: 1, index: 29 },
    { type: 1, index: 30 },
    { type: 1, index: 31 },
    { type: 1, index: 32 },
    { type: 1, index: 33 },
    { type: 1, index: 34 },
    { type: 1, index: 35 },
    { type: 1, index: 36 },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {}

  changeChart(type, index) {
    let i = this.arr.findIndex(item => item.index == index);
    this.arr[i].type = type;
  }
}
