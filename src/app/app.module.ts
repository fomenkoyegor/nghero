import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { ProgressComponent } from './hero-card/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
