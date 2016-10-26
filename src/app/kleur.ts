export class Kleur {

  constructor(public  bri: number,
              public hue: number,
              public sat: number,
              public naam: string,
              public xy: number[],
              public ct: number,
              public colormode: string) {

  }

  omschrijving(): string {
    return "bri: " + this.bri + ", hue: " + this.hue + ", sat " + this.sat;
  }

}
