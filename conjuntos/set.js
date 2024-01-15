class Set {
  constructor() {
    this.items = {};
  }

  //adciona um novo elemento
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }

    return false;
  }

  //remove um elemento

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  //remove todos os valores

  clear() {
    this.items = {};
  }

  //exibe o tamanho do conjunto

  size() {
    return Object.keys(this.items).length;
  }

  // devolve um array com os valores de todas propriedades do objeto
  values() {
    return Object.values(this.items);
  }

  //UNIÃO DE CONJUNTOS

  //O elemento X esta presente em A ou em B
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }

  //O elemento X esta presente tanto em A quanto em B, havendo compartilhamento de um ou mais elementos entre a e b

  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  //O X(elemento) esta presente em A mas nao esta em B

  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  //Todo X que estiver em A tbm deve estar presente em B

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.value().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}

const set = new Set();
set.add(1);
set.add(2);
