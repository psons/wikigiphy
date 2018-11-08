import { Injectable } from '@angular/core';
import {TimeRecord} from './time-record';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private searches: any[] = []

  // constructor() {}

  append(aSearch: string) {
    // let timeKey = this.getDateKey();
    let timeRecord = new TimeRecord(aSearch);
    console.log(`timeRecord.time` + timeRecord.time);
    this.searches.push(timeRecord);
  }

  getSearches() {
    return this.searches;
  }

  // getDateKey(){
  //   var now = Date.now();
  //   return now.toString();
  //
  // }
}

