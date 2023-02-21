import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ComponentOneComponent } from './component-one.component';

@NgModule({
  imports: [
  ],
  declarations: [
    ComponentOneComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentOneModule {
  constructor(private injector: Injector) {

    const component1 = createCustomElement(ComponentOneComponent, { injector: this.injector });
    customElements.define('component-one', component1);
  }
}
