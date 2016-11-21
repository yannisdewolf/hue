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

import { SidebarModule } from 'ng2-sidebar';
import { LampconfigComponent } from './lampconfig/lampconfig.component';
import { KleurtjeskiezerComponent } from './kleurtjeskiezer/kleurtjeskiezer.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { SchedulelistComponent } from './schedulelist/schedulelist.component';
import { ScheduleitemComponent } from './scheduleitem/scheduleitem.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";

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
    GrouplistComponent,
    LampconfigComponent,
    KleurtjeskiezerComponent,
    SchedulelistComponent,
    ScheduleitemComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    SidebarModule,
    RouterModule.forRoot([
      {path: 'lampen', component: LamplistComponent},
      {path: 'scenes', component: SceneListComponent},
      {path: 'groups', component: GrouplistComponent},
      {path: 'kleurtjes', component: KleurtjeskiezerComponent},
      {path: 'schedules', component: SchedulelistComponent},
      {path: '', component: LamplistComponent}

    ])

  ],
  providers: [Configuration, DataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
