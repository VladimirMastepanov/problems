const map = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export default (dna) => {
  const rna = [];

  for (const nucleotide of dna) {
    if (!Object.hasOwn(map, nucleotide)) {
      return null;
    }

    rna.push(map[nucleotide]);
  }

  return rna.join('');
};
