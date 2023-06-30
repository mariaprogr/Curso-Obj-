
const cliente = {
    name: "Álvaro",
    phone: "31 99492-5810",
    email: "alvaro@gmail.com",
    adress: "Rua Tenente 180",
    city: "Contagem",
    state: "MG",
    zip: "32.017-190", 
    aniversario: "2011/05/20",
    role: "costumer",
    ativo: true,
    exibirInfos: function() {
        console.log(this.name, this.email)
    }
}

const loja = {
    nome: "Lanches Altas Horas",
    telefone: "31 96633-6633",
    endereco: "Av. Principal, 100",
    role: "company",
    criarItens: function() {
        console.log('item criado!')
    }
}

Object.setPrototypeOf(loja, cliente)
loja.criarItens()
loja.exibirInfos()