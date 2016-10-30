import { Component, OnInit } from '@angular/core';
import {DataService} from "../data/DataService";
import {Schedule} from "../schedule";

@Component({
  selector: 'app-schedulelist',
  template: `
    <div>SCHEDULE LIST</div>
    <div *ngFor="let sched of schedules">
      Dagen aan: {{sched.getdates()}}
       -- {{sched.binairevoorstelling}} -- {{sched.localtime}}
    
    </div>
  `,
  styleUrls: ['./schedulelist.component.css']
})
export class SchedulelistComponent implements OnInit {

  schedules: Array<Schedule>;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getSchedules().subscribe(el => this.schedules = el);
  }

}
