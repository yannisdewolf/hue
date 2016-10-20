import { Component, OnInit } from '@angular/core';
import {Group} from "../group";
import {Http, Response} from "@angular/http";
import {Configuration} from "../config/Configuration";

@Component({
  selector: 'app-group',
  inputs: ['group'],
  template: `
    <div (click)="activeer()">{{group.beschrijving()}} </div>>
  `,
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  group: Group;

  constructor(private http: Http, private config: Configuration) { }

  ngOnInit() {
  }

  activeer() {
    this.http.put(this.config.ServerWithApiUrl+'/groups/' + this.group.identifier + "/action", {on : true})
      .subscribe((res: Response) => {
        console.log("data from server: " + res);
        console.log(`zet group  ${this.group.name} aan`);

      });


    return false;
  }

}
