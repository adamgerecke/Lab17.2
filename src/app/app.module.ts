import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AwwViewComponent } from './aww-view/aww-view.component';
import { AwwDetailViewComponent } from './aww-detail-view/aww-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AwwViewComponent,
    AwwDetailViewComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
