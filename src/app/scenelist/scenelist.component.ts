import { Component, OnInit } from '@angular/core';
import {Scene} from "../scene";
import {Http, Response} from "@angular/http";
import {Configuration} from "../config/Configuration";

@Component({
  selector: 'app-scenelist',
  templateUrl: './scenelist.component.html',
  styleUrls: ['./scenelist.component.css']
})
export class SceneListComponent implements OnInit {

  constructor(private http: Http, private config: Configuration) { }

  scenes: Scene[];

  ngOnInit() {
    this.getScenes();

  }



  getScenes() {

    this.http.request(this.config.ServerWithApiUrl + '/scenes')
      .subscribe((res: Response) => {
        var data = res.json();
        var keys = Object.keys(data);
        this.scenes = keys.map((value, index) => {
          var lampVanServer = data[value];
          return new Scene(lampVanServer["name"], lampVanServer["lights"], value);
        });

        this.scenes.forEach(v => console.log(v.beschrijving()));
      });

  }

}
