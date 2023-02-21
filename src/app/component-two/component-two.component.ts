import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  standalone: true,
  selector: 'component-one',
  templateUrl: './component-two.component.html'
})
export class ComponentTwoComponent implements OnInit {
  number = 2;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.count();
  }
}
