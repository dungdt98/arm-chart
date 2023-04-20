import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-high-chart-angular',
  templateUrl: './dashboard-high-chart-angular.component.html',
  styleUrls: ['./dashboard-high-chart-angular.component.scss']
})
export class DashboardHighChartAngularComponent implements OnInit{
  arr = [];
  arr2 = [];
  pageIndex = 0;
  pageSize = 6;

  ngOnInit(): void {
    for(let i = 0; i < 1000000; i ++ ) {
      this.arr.push({type: 1, index: i});
    }
    this.arr2 = this.arr.slice(this.pageIndex*this.pageSize, (this.pageIndex+ 1)*this.pageSize);
  }

  changeChart(type: number, index: number) {
    let i = this.arr.findIndex(item => item.index == index);
    this.arr[i].type = type;
  }

  loadMore() {
    this.pageIndex = ++this.pageIndex;
    let arr = this.arr.slice(this.pageIndex*this.pageSize, (this.pageIndex+ 1)*this.pageSize);
    if(this.arr2.length < this.arr.length) {
      this.arr2 = this.arr2.concat(arr);
    }
  }
}
