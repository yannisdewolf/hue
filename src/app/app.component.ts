import {Component, OnInit} from '@angular/core';
import {Lamp} from "./lamp";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-root',
  template: `
    <div class="ui container">
      <app-lamplist
        [lamplijst] = "lampen"
      >
      </app-lamplist>
    
    </div>
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
    this.http.request('http://192.168.1.6/api/newdevloper/lights')
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

  constructor(public http:Http) {

    this.configuraties = [
      'gedimd', 'wit'
    ]
  }

  addconfiguration(newconfig: string) {
    console.log(`incoming config: ${newconfig}`)
    this.configuraties.push(newconfig);
  }


}
