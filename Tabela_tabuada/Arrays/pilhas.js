class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    //Add novo elemento ao topo da pilha(no final)
    this.items.push(element);
  }

  pop() {
    return this.items.pop(); // Remove o ultimo elemento add a pilha
  }

  peek() {
    return this.items[this.items.length - 1]; //Exibe qual foi o ultimo elemento add a pilha
  }

  isEmpty() {
    return this.items.length === 0; //Retorna true se a pilha estiver vazia, false caso contrário
  }

  clear() {
    this.items = []; // Limpa/esvazia a pilha removendo todos os seus elementos
  }
}
