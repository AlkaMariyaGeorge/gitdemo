import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DemoIdComponent } from './demo-id/demo-id.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PagenotfoundComponent,
    LandingpageComponent,
    DemoIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
