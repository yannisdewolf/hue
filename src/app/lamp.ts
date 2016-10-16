export class Lamp {

  readonly lampNaam: string;
  setup: string;
  private on: boolean;
  readonly lampnummer: string;

  constructor(naam: string, on: boolean, lampnummer: string, setup?: string){
    this.lampNaam = naam;
    this.setup = setup || "";
    this.on = on;
    this.lampnummer = lampnummer;
  }

  setAan() {
    this.on = true;
  }

  staatAan() {
    return this.on;
  }

  staatUit() {
    return !this.staatAan();
  }

  setOff() {
    this.on = false;
  }

  beschrijving(): string {
    return "naam: " + this.lampNaam + " on? " + this.on;
  }

}
