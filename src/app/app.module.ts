import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { LampComponent } from './lamp/lamp.component';
import {Configuration} from "./config/Configuration";
import {DataService} from "./data/DataService";
import { LamplistComponent } from './lamplist/lamplist.component';
import {RouterModule} from "@angular/router";
import { SceneListComponent } from './scenelist/scenelist.component';
import { SceneComponent } from './scene/scene.component';
import { GroupComponent } from './group/group.component';
import { GrouplistComponent } from './grouplist/grouplist.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    LampComponent,
    LamplistComponent,
    SceneListComponent,
    SceneComponent,
    GroupComponent,
    GrouplistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {path: 'lampen', component: LamplistComponent},
      {path: 'scenes', component: SceneListComponent},
      {path: 'groups', component: GrouplistComponent}
    ])
  ],
  providers: [Configuration, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
