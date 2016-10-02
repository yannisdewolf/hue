export class Lamp {

  lampNaam: string;
  setup: string;
  aan: boolean;

  constructor(naam: string, aan: boolean, setup?: string){
    this.lampNaam = naam;
    this.setup = setup || "";
    this.aan = aan;
  }

}
