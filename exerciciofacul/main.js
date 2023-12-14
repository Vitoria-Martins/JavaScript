class LojaOnline {
    constructor() {
      this.produtosPromocao = [];
      this.categoriasProdutos = [];
      this.clientes = [];
      this.carrinhoCompras = [];
      this.vendas = [];
      this.estoque = [];
    }
    
    exibirProdutosPromocao() {
      // lógica para exibir produtos em promoção na página inicial
    }
    
    exibirCategoriasProdutos() {
      // lógica para exibir menu com categorias de produtos
    }
    
    exibirProdutosCategoria(categoria) {
      // lógica para exibir produtos da categoria selecionada
    }
    
    adicionarProdutoCarrinho(produto) {
      // lógica para adicionar produto ao carrinho de compras
    }
    
    removerProdutoCarrinho(produto) {
      // lógica para remover produto do carrinho de compras
    }
    
    finalizarCompra(cliente) {
      // lógica para finalizar compra e emitir boleto
    }
    
    cadastrarCliente(cliente) {
      // lógica para cadastrar novo cliente
    }
    
    acompanharPedido(pedido) {
      // lógica para permitir ao cliente acompanhar o processamento do pedido
    }
    
    cadastrarProduto(produto) {
      // lógica para cadastrar novo produto
    }
    
    alterarPrecoProduto(produto, novoPreco) {
      // lógica para alterar preço de produto existente
    }
    
    cadastrarPedidoFornecedor(pedido) {
      // lógica para cadastrar pedido feito aos fornecedores
    }
  }
  
  class Pessoa {
    constructor(nome, email, telefone, cidade, estado, cep) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
      this.cidade = cidade;
      this.estado = estado;
      this.cep = cep;
    }
  }
  
  class Funcionario extends Pessoa {
    constructor(nome, email, telefone, cidade, estado, cep, usuario, senha) {
      super(nome, email, telefone, cidade, estado, cep);
      this.usuario = usuario;
      this.senha = senha;
    }
    
    cadastrarProduto(produto) {
      // lógica para permitir ao funcionário cadastrar novo produto
    }
    
    alterarPrecoProduto(produto, novoPreco) {
      // lógica para permitir ao funcionário alterar preço de produto existente
    }
    
    cadastrarPedidoFornecedor(pedido) {
      // lógica para permitir ao funcionário cadastrar pedido feito aos fornecedores
    }
  }
  
  class Cliente extends Pessoa {
    constructor(nome, email, telefone, cidade, estado, cep) {
      super(nome, email, telefone, cidade, estado, cep);
    }
    
    acompanharPedido(pedido) {
      // lógica para permitir ao cliente acompanhar o processamento do pedido
    }
    
    finalizarCompra(carrinho) {
      // lógica para permitir ao cliente finalizar a compra
    }
  }
  
  class Fornecedor extends Pessoa {
    constructor(nome, email, telefone, cidade, estado, cep) {
      super(nome, email, telefone, cidade, estado, cep);
    }
}