export class Kleur {

  constructor(public  bri: number, public hue: number, public sat: number, public naam: string ) {

  }

  omschrijving(): string {
    return "bri: " + this.bri + ", hue: " + this.hue + ", sat " + this.sat;
  }

}
