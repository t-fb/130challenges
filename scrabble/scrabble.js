class Scrabble {
  static letterIndex = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  };
  constructor(word) {
    this.word = word;
  }

  static score(word) {
    let newWord = new Scrabble(word);
    return newWord.score();
  }

  score() {
    if (this.checkNull()) return 0;

    let currentWord = [...this.word];
    let totalScore = 0;

    currentWord.forEach((char) => {
      let letterKey = Object.keys(Scrabble.letterIndex).find((key) =>
        key.includes(char.toUpperCase())
      );
      if (letterKey) {
        totalScore += Scrabble.letterIndex[String(letterKey)];
      }
    });

    return totalScore;
  }

  checkNull() {
    return this.word === null;
  }
}

module.exports = Scrabble;
