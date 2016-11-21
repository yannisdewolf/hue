import {Component, OnInit} from '@angular/core';
import {Lamp} from "./lamp";
import {Http, Response} from "@angular/http";
import {Configuration} from "./config/Configuration";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-root',
  template: `

    <div class="ui fivev item menu">
      <a routerLink="/lampen" class="item" routerLinkActive="active">Lampen</a>
      <a routerLink="/schedules" class="item" routerLinkActive="active">Schedules</a>
      <a routerLink="/scenes" class="item" routerLinkActive="active">Scenes</a>
      <a routerLink="/groups" class="item" routerLinkActive="active">Groups</a>
      <a routerLink="/kleurtjes" class="item" routerLinkActive="active">Kleurtjes</a>
    </div>
    <router-outlet></router-outlet>


  `
})
export class AppComponent implements OnInit{

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

  constructor(public http:Http, private config:Configuration) {



    var serverWithApiUrl = config.ServerWithApiUrl;
    console.log("server with api url: " + serverWithApiUrl);

    this.configuraties = [
      'gedimd', 'wit'
    ]
  }

  addconfiguration(newconfig: string) {
    console.log(`incoming config: ${newconfig}`)
    this.configuraties.push(newconfig);
  }


}
