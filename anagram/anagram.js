class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(arrWords) {
    let matches = [];

    arrWords.forEach((otherWord) => {
      let other = this.sort(this.word);
      let compareWord = this.sort(otherWord);

      if (
        compareWord === other &&
        otherWord.toLowerCase() !== this.word.toLowerCase()
      ) {
        matches.push(otherWord);
      }
    });

    return matches;
  }

  sort(word) {
    return [...word.toLowerCase()].sort().join("");
  }
}

module.exports = Anagram;
