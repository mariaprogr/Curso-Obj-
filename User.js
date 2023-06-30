import Costumer from "./Costumer.js";

export default class User extends Costumer {
    constructor(nome,telefone, endereço, cep, aniversário, role = 'user', ativo = true){
        super(nome,telefone, endereço, cep, aniversário, role, ativo)
    }
    recebePedido(pedido, produto){
        return `Pedido ${pedido} recebido com a descrição ${produto}.`
    }
}
