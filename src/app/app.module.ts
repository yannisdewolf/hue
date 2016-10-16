import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { LampComponent } from './lamp/lamp.component';
import { SceneComponent } from './scene/scene.component';
import {Configuration} from "./config/Configuration";
import {DataService} from "./data/DataService";
import { LamplistComponent } from './lamplist/lamplist.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    LampComponent,
    SceneComponent,
    LamplistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [Configuration, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
