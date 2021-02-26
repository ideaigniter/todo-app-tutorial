import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { GoodbyeWorldComponent } from './goodbye-world/goodbye-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    GoodbyeWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
