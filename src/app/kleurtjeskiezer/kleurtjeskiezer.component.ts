import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Kleur} from "../kleur";
import {DataService} from "../data/DataService";

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

  constructor(private http:Http, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getKleurtjes().subscribe(kleurtjes => this.kleuren = kleurtjes);
  }

}
