export default class Costumer {
    #nome
    #telefone
    #endereço
    #cep
    #aniversário
    #role
    #ativo
    constructor(nome, telefone, endereço, cep, aniversário, role, ativo = true) {
        this.#nome = nome
        this.#telefone = telefone
        this.#endereço = endereço
        this.#cep = cep
        this.#aniversário = aniversário
        this.#role = role || 'cliente'
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome
    }

    get telefone(){
        return this.#telefone
    }

    get endereço(){
        return this.#endereço
    }

    get cep(){
        return this.#cep
    }

    get aniversário(){
        return this.#aniversário
    }

    get role(){
        return this.#role
    }

    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if (novoNome ===''){
            throw new Error('formato não válido')
        }
        this.#nome = novoNome
    }

    exibirInfos(){
        return `${this.nome}, ${this.telefone}, ${this.endereço}, 
        ${this.cep}, ${this.aniversário}, ${this.role}, 
        ${this.ativo}`
    }
}
 