import { Component, OnInit } from '@angular/core';
import {Scene} from "../scene";
import {Http, Response} from "@angular/http";
import {Configuration} from "../config/Configuration";

@Component({
  selector: 'app-scene',
  inputs: ['scene'],
  template: `
    <div (click)="activeer()">{{scene.beschrijving()}} </div>>
  `,
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

  scene: Scene;

  constructor(private http: Http, private config: Configuration) { }

  ngOnInit() {
  }

  activeer(): boolean {


    this.http.put(this.config.ServerWithApiUrl + "/scenes/" + this.scene.reference, {on : true})
      .subscribe((res: Response) => {
        console.log("scenedata from server: " + res);
      });

    return false;
  }


}
