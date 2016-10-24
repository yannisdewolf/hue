import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Kleur} from "../kleur";

@Component({
  selector: 'app-kleurtjeskiezer',
  template: `
    <div *ngFor="let kleur of kleuren">
      {{kleur.naam}}: {{kleur.omschrijving()}}
    </div>
  `,
  styleUrls: ['./kleurtjeskiezer.component.css']
})
export class KleurtjeskiezerComponent implements OnInit {

  kleuren: Kleur[];

  constructor(private http:Http) { }

  ngOnInit() {

    this.http.get("/assets/config/kleurtjes.json")
      .map(res => res.json())
      .subscribe(data => {
        var allKeys = Object.keys(data);


        var alleData = allKeys.map(key => {
          var kleur = data[key];
          return new Kleur(kleur["bri"], kleur["hue"], kleur["sat"], key);
        });
        this.kleuren = alleData;

      });

      return false;
  }

}
