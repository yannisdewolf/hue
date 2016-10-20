import { Component, OnInit } from '@angular/core';
import {Group} from "../group";
import {Configuration} from "../config/Configuration";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-grouplist',
  template: `

    <div class="ui container">
      <div class="ui items">
          <app-group 
            *ngFor="let group of groups" 
            [group] = "group"
            >
          </app-group>
      </div>
    </div>

     
  `,
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {

  groups: Group[];

  constructor(private http: Http, private config: Configuration) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.http.request(this.config.ServerWithApiUrl + '/lights')
      .subscribe((res: Response) => {

        var data = res.json();
        var keys = Object.keys(data);

        var lampenVanServer = keys.map((value, index) => {
          var lampVanServer = data[value];
          return new Group(lampVanServer["name"], lampVanServer["lights"], lampVanServer["type"], value);

        });

        lampenVanServer.forEach(lamp => console.log(lamp.beschrijving()));

        this.groups = lampenVanServer;
      });
  }

}
