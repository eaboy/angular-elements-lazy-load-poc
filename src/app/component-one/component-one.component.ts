import { Component, OnInit } from '@angular/core';
import { LazyModuleService } from '../lazy-module.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'component-one',
  templateUrl: './component-one.component.html'
})
export class ComponentOneComponent implements OnInit {
  title = 'module-federation';
  number = 1;

  constructor(private sharedService: SharedService, private lazyModuleService: LazyModuleService) { }

  ngOnInit() {
    this.sharedService.count();
    this.lazyModuleService.callSharedCount();
  }

}
