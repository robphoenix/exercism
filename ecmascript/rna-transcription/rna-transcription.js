class Transcriptor {
  static toRna(dna) {
    return [...dna]
      .map((x) => {
        const nucleotide = { G: 'C', C: 'G', T: 'A', A: 'U' }[x];
        if (nucleotide === undefined) {
          throw Error('Invalid input DNA.');
        }
        return nucleotide;
      })
      .join('');
  }
}

export default Transcriptor;