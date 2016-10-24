import {Component, OnInit} from '@angular/core';
import {Scene} from "../scene";
import {Http, Response} from "@angular/http";
import {Configuration} from "../config/Configuration";
import {SceneDetail} from "../scenedetail";

@Component({
  selector: 'app-scene',
  host: {'class': 'item'},
  inputs: ['scene'],
  template: `
    <div (click)="activeer()">{{scene.beschrijving()}}</div>
    <a (click)="toonDetail()">Detail</a>
    <div *ngIf="toonSceneDetail">
        Details:<br />
        Naam: {{sceneDetail.name}}
    
    </div>
  `,
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

  scene: Scene;
  toonSceneDetail: boolean = false;
  sceneDetail: SceneDetail;

  constructor(private http: Http, private config: Configuration) {
  }

  ngOnInit() {
  }

  activeer(): boolean {


    this.http.put(this.config.ServerWithApiUrl + "/scenes/" + this.scene.reference, {on: true})
      .subscribe((res: Response) => {
        console.log("scenedata from server: " + res);
      });

    return false;
  }

  toonDetail() : boolean {
    if(!this.toonSceneDetail) {

      this.http.get(this.config.ServerWithApiUrl + "/scenes/" + this.scene.reference)
        .subscribe((res: Response) => {
          var data = res.json();
          this.sceneDetail = new SceneDetail(data["name"]);
          this.toonSceneDetail = true;
        });

    } else {
      this.toonSceneDetail = !this.toonSceneDetail;
    }

    return false;
  }

}
