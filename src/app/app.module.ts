import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SimpletextComponent } from './simpletext/simpletext.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SimpletextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TestComponent]
})
export class AppModule { }
