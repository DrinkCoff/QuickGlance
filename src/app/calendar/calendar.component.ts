import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { this.getEvents(); }

  ngOnInit() { }

  getEvents() {
      // Calendar Variables
      // hinduHolidays = 'webcal://www.calendarlabs.com/ical-calendar/ics/48/Hindu_Holidays.ics';
      // usHolidays = 'webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics';


      var request = require('request');
      var calendarUrl = 'webcal://www.calendarlabs.com/ical-calendar/ics/48/Hindu_Holidays.ics';

      var options = {
        url: calendarUrl.replace('webcal://', 'https://'),
        gzip: true
      };

      request(options, function (error, response, icalData) {
        console.log(icalData);
      });
  }
}
