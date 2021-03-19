import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import { from } from 'rxjs';
 
@NgModule({ 
  declarations: [
    AppComponent,
	 FirstComponent,
	 SecondComponent,
	 ThirdComponent
  ],
  imports: [
    BrowserModule,
	 Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
