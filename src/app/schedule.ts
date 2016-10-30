export class Schedule {

  binairevoorstelling: string;


  constructor(public name: string, public localtime: string) {

  }

  getdates() : string[] {

    let dagen: string[] = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag" ];

    var dagenAan: string[] = [];
    if(this.localtime.indexOf("W")>=0) {

      var binairevoorstelling : string =  parseInt(this.localtime.slice(1,4)).toString(2)
      var totalebinaire: string = this.leftpad(binairevoorstelling, 7);
      this.binairevoorstelling = totalebinaire;

      totalebinaire.split("").forEach((jaNee, index) => {

        if(jaNee === "1") {
          console.log("index " + index + " --> " + dagen[index]);
          dagenAan.push(dagen[index]);
        }
      });

      let sundayZeroBasedDay: number = new Date().getDay();

      let indexVanDag : number = (sundayZeroBasedDay) % 7;

      console.log("dag van vandaag " + indexVanDag);
      let dag = dagen[indexVanDag];
      console.log("eerstvolgende dag na vandaag: " + dag);
    }
    console.log("dagen aan: " + dagenAan);
    return dagenAan;
  }

  leftpad(str: string, totallength: number, char='0') {
    console.log("str.length " + str.length);

    if(str.length < totallength) {
      let toAppend = totallength - str.length + 1;
      console.log("chars to append: " + toAppend);
      return new Array(toAppend).join(char) + str;

    }
    return str;
  }

}
