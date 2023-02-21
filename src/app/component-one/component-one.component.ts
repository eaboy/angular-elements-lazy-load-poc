import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'component-one',
  templateUrl: './component-one.component.html'
})
export class ComponentOneComponent implements OnInit {
  title = 'module-federation';
  number = 1;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.count();
  }

}
