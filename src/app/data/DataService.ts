import {Injectable} from "@angular/core";


import {Observable} from 'rxjs/Rx';
import { Configuration } from '../config/Configuration';
import {Http, Response} from "@angular/http";
import {Lamp} from "../lamp";

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
