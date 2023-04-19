import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import { data, data3 } from '../data';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent implements OnInit,AfterViewInit {
  @Input() index;
  id;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart() {
    this.id = 'chartdiv' + this.index;
    let root = am5.Root.new(this.id);
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'none',
      })
    );
    cursor.lineY.set('visible', false);

    // The data
    let data = data3;

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'year',
        startLocation: 0.5,
        endLocation: 0.5,
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

    function createSeries(name, field) {
      let series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          stacked: true,
          valueYField: field,
          categoryXField: 'year',
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: 'horizontal',
            labelText: '[bold]{name}[/]\n{categoryX}: {valueY}',
          }),
        })
      );

      series.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });

      series.data.setAll(data);
      series.appear(1000);
    }

    createSeries('Bicycles', 'bicycles');

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal',
      })
    );

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  }

  data = data;
}
