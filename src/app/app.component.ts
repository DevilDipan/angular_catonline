import { Component } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
import { AppDateAdapter, APP_DATE_FORMATS} from './date.adapter';
import {formatDate,Location } from '@angular/common';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ]
})
export class AppComponent {

  favoriteSeason: string = 'Tabular';

  seasons = [
    'Tabular',
    'Graphical'
  ];
  selectedValuer: string;

  cars = [
    {name: '1 sec', models: ['1 hr', '2 hr', '3 hr', '4 hr']},
    {name: '10 sec', models: ['1 hr', '2 hr', '4 hr', '8 hr']},
    {name: '30 sec', models: ['1 hr', '2 hr', '4 hr', '8 hr', '16 hr']},
    {name: '60 sec', models: ['1 hr', '2 hr', '4 hr', '8 hr', '16 hr', '24 hr']}
  ];
  
  title = 'catweb';
  solar = '1';

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  
  today= new Date();
  jmtoday = '';
  showMainContent: boolean;

  constructor(private _location: Location){
    this.jmtoday = formatDate(this.today, 'hh:mm a', 'en-US', '+0530');
  }

  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
  }
  backClicked() {
    this.showMainContent = this.showMainContent  ? false : this._location.back();
  }
}