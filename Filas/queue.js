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
    if (this.isEmpy()) {
      return undefined;
    }
    const result = this.items[this.loweatCount];
    delete this.items[this.loweatCount];
    this.loweatCount++;
    return result;w
  }
}
