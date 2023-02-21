import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  private counter = 0;

  constructor() {
    console.log('SharedService created');
  }

  count(extraLog?: string) {
    this.counter++;
    if (extraLog) {
      console.log(extraLog);
    }
    console.log('Counter value is: ', this.counter);
  }

}