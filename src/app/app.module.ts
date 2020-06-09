import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CallingComponentsComponent } from './components/calling-components/calling-components.component';
import { CallingTwoComponent } from './components/calling-two/calling-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CallingComponentsComponent,
    HelloComponent,
    CallingTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents : [
    CallingComponentsComponent,
    CallingTwoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
