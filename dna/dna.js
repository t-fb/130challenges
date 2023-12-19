class DNA {
  constructor(dna) {
    this.dna = dna;
  }

  hammingDistance(other) {
    other = [...other];
    let shorterStrand = [...this.dna];
    let otherStrand = other;
    let difference = 0;

    if (other.length < this.dna.length) {
      shorterStrand = other;
      otherStrand = [...this.dna];
    }

    shorterStrand.forEach((char, i) => {
      if (char !== otherStrand[i]) {
        difference++;
      }
    });

    return difference;
  }
}

module.exports = DNA;
