import { Component, OnInit } from '@angular/core';
import cronstrue from 'cronstrue';

@Component({
  selector: 'app-crontab-test',
  templateUrl: './crontab-test.component.html',
  styleUrls: ['./crontab-test.component.scss']
})
export class CrontabTestComponent implements OnInit{
  ngOnInit(): void {
    console.log(cronstrue.toString('5 10 21 4 6'), 'aaaaaa');

  }
}
