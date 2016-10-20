export class Group {


  constructor(public name: string, public lights:string[],
    public type: string, public identifier: string
  ) {
  }

  beschrijving(): string {
    return "" + this.name + " lights: " + this.lights + " type: " + this.type + " identifier: " + this.identifier;
  }

}
