class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(arrWords) {
    let matches = [];

    arrWords.forEach((otherWord) => {
      let other = [...otherWord.toLowerCase()].sort().join("");
      let compareWord = [...this.word.toLowerCase()].sort().join("");

      if (
        compareWord === other &&
        otherWord.toLowerCase() !== this.word.toLowerCase()
      ) {
        matches.push(otherWord);
      }
    });

    return matches;
  }
}

module.exports = Anagram;
