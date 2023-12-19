/*
  M: 1000,
 CM: 900,
  D: 500,
 CD: 400,
  C: 100,
 XC: 90,
  L: 50,
 XL: 40,
  X: 10,
 IX: 9,
  V: 5,
 IV: 4,
  I: 1


27 => "XXVII"
result = ''

currentNum = 27

iterate through roman object
- if `currentNum` length is equal to `roman` value length AND is less than or equal to `roman` value 
  - let repeat =  round down dividing current num with roman value
  - append roman key to `result` repeat times
  - assign currentNum the remainder 


*/

class RomanNumeral {
  static ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let currentNum = this.number;
    let roman = "";

    while (currentNum !== 0) {
      for (let romanKey in RomanNumeral.ROMAN_NUMERALS) {
        let value = RomanNumeral.ROMAN_NUMERALS[romanKey];

        if (
          String(value).length === String(currentNum).length &&
          currentNum <= value
        ) {
          let repeatTimes = Math.floor(currentNum / value);

          roman += romanKey.repeat(repeatTimes);
          currentNum = Math.floor(currentNum / value);
        }
      }
    }

    return roman;
  }
}

// 27 => 7
let number = new RomanNumeral(27);
console.log(number.toRoman());
