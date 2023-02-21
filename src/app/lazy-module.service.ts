import { Injectable } from "@angular/core";
import { SharedService } from "./shared.service";

@Injectable()

export class LazyModuleService {

  constructor(private sharedService: SharedService) {
    console.log("Service only provided in lazy loaded module instantiated");
  }

  callSharedCount() {
    this.sharedService.count('This is called from the LazyModuleService');
  }

}