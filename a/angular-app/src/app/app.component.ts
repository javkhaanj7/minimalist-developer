import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { faCodeBranch, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public faCodeBranch = faCodeBranch;
  public faClock = faClock;
  public today = '';

  ngOnInit(): void {
    this.changeLocale('mn');
  }

  changeLocale(locale: string): void {
    moment.locale(locale);
    this.today = moment().format('ll');
  }
}
