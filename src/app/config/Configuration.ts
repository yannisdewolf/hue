import {Injectable} from "@angular/core";

@Injectable()
export class Configuration {

  public Server: string = "http://192.168.1.6";
  public ApiUrl: string = "/api/newdevloper";
  //public ServerWithApiUrl = this.Server + this.ApiUrl;
  public ServerWithApiUrl = "http://localhost:8080";

}
