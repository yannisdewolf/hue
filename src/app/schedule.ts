export class Schedule {

  binairevoorstelling: string;

  dagen: string[] = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag" ];


  constructor(public name: string, public localtime: string) {

  }

  getEerstvolgendeDagen() : string[] {
    console.log("========================");
    console.log(this.localtime);
    let eerstvolgendedagen: string[] = [];

    let dagenActief = this.getdates();

    let sundayZeroBasedDay: number = new Date().getDay();

    let indexVanDag : number = (sundayZeroBasedDay+6) % 7;

    console.log("index van vandaag " + indexVanDag);
    console.log("de dag van vandaag: " + this.dagen[indexVanDag]);
    let dag = this.dagen[indexVanDag];
    //console.log("eerstvolgende dag na vandaag: " + dag);

    var deelVoorvooraan = this.dagen.slice(indexVanDag + 1);
    console.log("plak dit vooraan: "+ deelVoorvooraan);

    var deelVoorAchteraan = this.dagen.slice(0, indexVanDag + 1);
    console.log("plak dit achteraan: " + deelVoorAchteraan);

    deelVoorvooraan.forEach(el => eerstvolgendedagen.push(el));
    deelVoorAchteraan.forEach(el => eerstvolgendedagen.push(el));

    var filter = eerstvolgendedagen.filter(el => dagenActief.indexOf(el) >= 0);
    console.log("eerstvolgende dagen actief: " + filter);
    console.log("========================");
    return filter;

  }

  getdates() : string[] {

    var dagenAan: string[] = [];
    if(this.localtime.indexOf("W")>=0) {

      var binairevoorstelling : string =  parseInt(this.localtime.slice(1,4)).toString(2)
      var totalebinaire: string = this.leftpad(binairevoorstelling, 7);
      this.binairevoorstelling = totalebinaire;

      totalebinaire.split("").forEach((jaNee, index) => {

        if(jaNee === "1") {
          dagenAan.push(this.dagen[index]);
        }
      });


    }
    return dagenAan;
  }

  leftpad(str: string, totallength: number, char='0') {

    if(str.length < totallength) {
      let toAppend = totallength - str.length + 1;
      return new Array(toAppend).join(char) + str;

    }
    return str;
  }

}
