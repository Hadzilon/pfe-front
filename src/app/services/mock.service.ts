import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  constructor() {}

  public getVitals() {
    return [
      {
        temperature: 37.6,
        heartRate: 72,
        bloodPressure: "120/80",
        Datetime: "2021-09-01 12:00:00"
      },
      {
        temperature: 32.6,
        heartRate: 71,
        bloodPressure: "120/80",
        Datetime: "2021-09-01 12:30:00"
      },
      {
        temperature: 34.6,
        heartRate: 70,
        bloodPressure: "120/80",
        Datetime: "2021-09-01 13:00:00"
      }
    ];
  }
}
