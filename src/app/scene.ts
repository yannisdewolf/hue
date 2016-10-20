export class Scene {



  constructor(public name: string,  public lights: string[],
              public reference: string,
              public lightstates: {}) {

  }

  beschrijving(): string {
    return "name " + this.name + " lights " + this.lights + " reference: " + this.reference;

  }
}
