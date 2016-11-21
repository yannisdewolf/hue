import { Component, OnInit } from '@angular/core';
import {Response, Http} from "@angular/http";
import {Lamp} from "../lamp";
import {Configuration} from "../config/Configuration";

@Component({
  selector: 'app-lamplist',
  template: `

    <div class="ui container">
      <div class="ui items">
          <app-lamp 
            *ngFor="let lamp of lampen" 
            [lamp] = "lamp"
            >
          </app-lamp>
      </div>
    </div>

     
  `,
  styleUrls: ['./lamplist.component.css']
})
export class LamplistComponent implements OnInit {

  lampen: Lamp[];

  configuraties: [string];

  data: Object;

  ngOnInit(): void {
    this.getLampen();
  }

  getLampen() {
    this.http.request(this.config.ServerWithApiUrl + '/lights')
      .subscribe((res: Response) => {

        this.data = res.json();
        var keys = Object.keys(this.data);

        var lampenVanServer = keys.map((value, index) => {
          var lampVanServer = this.data[value];
          return new Lamp(lampVanServer["name"], lampVanServer["state"]["on"], value);
        });

        lampenVanServer.forEach(lamp => console.log(lamp.beschrijving()));

        this.lampen = lampenVanServer;
      });
  }
  //commentaar

  constructor(public http:Http, private config:Configuration) {

    var serverWithApiUrl = config.ServerWithApiUrl;
    console.log("server with api url: " + serverWithApiUrl);

    this.configuraties = [
      'gedimd', 'wit'
    ]
  }
}
