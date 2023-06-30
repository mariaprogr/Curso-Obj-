import Costumer from "./Costumer.js";

export default class Admin extends Costumer {
    constructor(nome,telefone, endereço, cep, aniversário, role = 'admin', ativo = true){
        super(nome,telefone, endereço, cep, aniversário, role, ativo)
    }

    exibirInfos(){
        return `${this.nome}, ${this.telefone}, ${this.endereço}, 
        ${this.cep}, ${this.aniversário}, ${this.role}, 
        ${this.ativo}`
    }

    criarItem(nomeDoProduto, tamanho){
        return `Produto ${nomeDoProduto} criado com sabor ${tamanho}`
    }
}

