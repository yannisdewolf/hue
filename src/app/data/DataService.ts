import {Injectable} from "@angular/core";


import {Observable} from 'rxjs/Rx';
import { Configuration } from '../config/Configuration';
import {Http, Response} from "@angular/http";
import {Lamp} from "../lamp";
import {Kleur} from "../kleur";

@Injectable()
export class DataService {

  url: string;

  constructor(private http: Http, private _configuration: Configuration) {

    this.url = _configuration.ServerWithApiUrl;

  }


  getData() : Observable<string[]> {
    let t = this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);

  return t;

  }

  getKleurtjes() : Observable<Kleur[]> {

    return this.http.get("/assets/config/kleurtjes.json")
      .map(res => res.json())
      .map(data => {
        var allKeys = Object.keys(data);


        var alleData = allKeys.map(key => {
          var kleur = data[key];
          return new Kleur(
              kleur["bri"],
              kleur["hue"],
              kleur["sat"],
              key,
              kleur["xy"],
              kleur["ct"],
              kleur["colormode"]);
        });
        return alleData;

      }).catch(this.handleError);


  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("res:" + res + " - body: " + JSON.stringify(body));
    return body || { };
  }
  private handleError (error: any) {

    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error("error" + errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
