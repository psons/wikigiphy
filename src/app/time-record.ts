

export class TimeRecord {
  public time: Date;
  public data: any;

  constructor(theData) {
    this.time = new Date(Date.now());
    this.data = theData;
  }

  // https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  // https://stackoverflow.com/questions/45724975/date-tolocaledatestring-is-not-a-function
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  // example: options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  formatted() {
    // https://gist.github.com/MythRen/c4921735812dd2c0217a
    let d = this.time;
    var timeString = d.getFullYear().toString()+"-"+
      ((d.getMonth()+1).toString().length==2 ?
        (d.getMonth()+1).toString() :
        "0"+(d.getMonth()+1).toString())+"-" +
      (d.getDate().toString().length==2?d.getDate().toString() :
        "0"+d.getDate().toString())+" "+
      (d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+
      (
        ((d.getMinutes()/5) *5).toString().length==2 ?
          ((d.getMinutes()/5) *5).toString() :
          "0"+((d.getMinutes()/5)*5).toString()
      )+":00";
    return timeString + ' ' + this.data;
  }

}
