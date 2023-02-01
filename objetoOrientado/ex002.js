class Produto{

 /*metodo construtor é a primeira funcao chamada*/ 
    constructor(){
    /* atributos */

    /* this serve para dizer dentro desse.id*/
        this.id = 0;
        this.nomeProduto = '';
        this.valor = 0;
    }   
    /* Metodos */
    adicionar(){
        alert('Vamos adicionar um produto!');
    }
    excluir(){

        alert('Item deletado');
    }
}
/* Ação */

/*new é utilizado para criar uma nova instância de uma determinada classe*/
var produto = new Produto();