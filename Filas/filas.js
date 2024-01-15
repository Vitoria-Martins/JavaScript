class Queue {
  constructor() {
    this.count = 0;
    this.loweatCount = 0;
    this.items = {};
  }

  enqueue(element) {
    //add novo elemento no final da fila
    this.items[this.count] = element; // items coleçao chave/valor
    this.count++;
  }

  dequeue() {
    //remove o item, (o primeiro add na fila sera removido)
    if (this.isEmpy()) {
      return undefined;
    }
    const result = this.items[this.loweatCount];
    delete this.items[this.loweatCount];
    this.loweatCount++;
    return result;
  }

  peek() {
    //retorna qual elemento esta na frente da fila
    if (this.isEmpy()) {
      return undefined;
    }
    return this.items[this.loweatCount];
  }

  isEmpy() {
    return this.count - this.loweatCount === 0; // verifica se a pilha esta vazia e retorna true
  }

  clear() {
    // limpa todos elementos da fila
    this.items = {};
    this.count = 0;
    this.loweatCount = 0;
  }
}
