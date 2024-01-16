class Robot {
  static nameHistory = [];
  static generateName() {
    let name = Robot._generateLetters() + Robot._generateNumbers();
    return name;
  }

  static _generateNumbers() {
    let allNums = "0123456789";
    let nums = "";

    for (let count = 0; count < 3; count++) {
      nums += allNums[Robot._randomIndex(allNums.length)];
    }

    return nums;
  }

  static _generateLetters() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letters = "";
    for (let count = 0; count < 2; count++) {
      letters += alphabet[Robot._randomIndex(alphabet.length)];
    }

    return letters;
  }

  static _randomIndex(maxLength) {
    return Math.floor(Math.random() * maxLength);
  }
  constructor() {
    this.robotName = Robot.generateName();
    if (Robot.nameHistory.includes(this.robotName)) {
      this.generateUniqueName();
    }
    Robot.nameHistory.push(this.robotName);
  }

  name() {
    if (this.robotName) return this.robotName;
    this.generateUniqueName();
  }

  reset() {
    let indexToRemove = Robot.nameHistory.indexOf(this.robotName);
    Robot.nameHistory.splice(indexToRemove, 1);
    this.robotName = null;
  }

  generateUniqueName() {
    let newName = Robot.generateName();

    while (true) {
      if (!Robot.nameHistory.includes(newName)) {
        this.robotName = newName;
        break;
      }

      newName = Robot.generateName();
    }
  }
}

module.exports = Robot;
