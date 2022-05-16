const DEFAULT = {
    A:'T',
    T:'A',
    C:'G',
    G:'C',
  }
  function DNAStrand(dna){
    const convert = [...dna].map(v=> {
      return v = DEFAULT[v] || '';
    })
    return convert.join("")
  }