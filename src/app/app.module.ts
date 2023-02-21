import { createNgModule, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ComponentTwoComponent } from './component-two/component-two.component';

@NgModule({
  imports: [
    BrowserModule
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const component2 = createCustomElement(ComponentTwoComponent, { injector: this.injector });
    customElements.define('component-two', component2);
    setTimeout(() => this.loadComponent(), 5000);
  }

  loadComponent() {
    import('./component-one/component-one.module').then((m) => {
      createNgModule(m.ComponentOneModule, this.injector)
      console.log('Component 2 loaded');
    })
  }

}
