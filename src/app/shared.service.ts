import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  private counter = 0;

  constructor() {
    console.log('SharedService created');
  }

  count() {
    this.counter++;
    console.log('Counter value is: ', this.counter);
  }

}