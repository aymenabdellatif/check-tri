function triParInsertion(tableau) {
    for (let i = 1; i < tableau.length; i++) {
      let elementCourant = tableau[i];
      let j = i - 1;
      while (j >= 0 && tableau[j] > elementCourant) {
        tableau[j + 1] = tableau[j];
        j--;
      }
      tableau[j + 1] = elementCourant;
    }
    return tableau;
  }